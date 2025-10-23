'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { createClient } from '^/app/supabase/ClienteSupabase'
import { ITech } from '^/app/data/Projects/ProjectsData'

import styles from './addProject.module.css'

const generateUniqueFileName = (fileName: string) => {
   const extension = fileName.split('.').pop()
   return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${extension}`
}

export default function AddProjectPage() {
   const router = useRouter()
   const supabase = createClient()

   // Estados do formulário
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [link, setLink] = useState('')
   const [type, setType] = useState<'web' | 'mobile'>('web')
   const [target, setTarget] = useState(true)
   const [techsString, setTechsString] = useState('')
   const [coverImageFile, setCoverImageFile] = useState<File | null>(null)
   const [carouselImageFiles, setCarouselImageFiles] = useState<FileList | null>(null)

   const [loading, setLoading] = useState(false)
   const [error, setError] = useState<string | null>(null)
   const [success, setSuccess] = useState<string | null>(null)

   const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
         setCoverImageFile(e.target.files[0])
      } else {
         setCoverImageFile(null)
      }
   }

   const handleCarouselImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCarouselImageFiles(e.target.files)
   }

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setLoading(true)
      setError(null)
      setSuccess(null)

      let coverImageUrl = ''
      const carouselImageUrls: string[] = []
      let parsedTechs: ITech[] = []

      try {
         // --- 1 Validação de Techs ---
         try {
            parsedTechs = JSON.parse(techsString)
            if (!Array.isArray(parsedTechs) || parsedTechs.some(t => typeof t.name !== 'string' || typeof t.iconName !== 'string')) {
               throw new Error('Formato inválido para tecnologias')
            }
         } catch (e) {
            throw new Error('JSON inválido no campo Tecnologias Verifique o formato [{"name": "React", "iconName": "SiReact"}, ...]')
         }

         // --- 2 Upload da Imagem de Capa ---
         if (!coverImageFile) {
            throw new Error('Imagem de capa é obrigatória')
         }

         const coverFileName = generateUniqueFileName(coverImageFile.name)
         const { data: coverUploadData, error: coverUploadError } = await supabase.storage
            .from('project-images') // Nome do seu bucket
            .upload(`covers/${coverFileName}`, coverImageFile) // Pasta opcional 'covers/'

         if (coverUploadError) {
            throw new Error(`Erro no upload da capa: ${coverUploadError.message}`)
         }

         // Obter URL pública da capa
         const { data: coverUrlData } = supabase.storage
            .from('project-images')
            .getPublicUrl(coverUploadData.path)
         coverImageUrl = coverUrlData.publicUrl

         // --- 3 Upload das Imagens do Carrossel ---
         if (carouselImageFiles && carouselImageFiles.length > 0) {
            for (let i = 0; i < carouselImageFiles.length; i++) {
               const file = carouselImageFiles[i]
               const carouselFileName = generateUniqueFileName(file.name)
               const { data: carouselUploadData, error: carouselUploadError } = await supabase.storage
                  .from('project-images')
                  .upload(`carousel/${carouselFileName}`, file) // Pasta opcional 'carousel/'

               if (carouselUploadError) {
                  throw new Error(`Erro no upload da imagem ${i + 1} do carrossel: ${carouselUploadError.message}`)
               }

               const { data: carouselUrlData } = supabase.storage
                  .from('project-images')
                  .getPublicUrl(carouselUploadData.path)
               carouselImageUrls.push(carouselUrlData.publicUrl)
            }
         }

         // --- 4 Determinar a próxima 'order' ---
         // Busca o projeto com a maior ordem atual
         const { data: lastOrderData, error: orderError } = await supabase
            .from('projects')
            .select('order')
            .order('order', { ascending: false })
            .limit(1)
            .single() // Pega apenas um resultado ou null

         if (orderError && orderError.code !== 'PGRST116') { // Ignora erro se a tabela estiver vazia
            throw orderError
         }

         const nextOrder = lastOrderData ? lastOrderData.order + 10 : 10 // Começa em 10 ou adiciona 10 à última ordem


         // --- 5 Inserir no Banco de Dados ---
         const { error: insertError } = await supabase
            .from('projects')
            .insert([{
               title,
               description,
               link,
               type,
               target,
               techs: parsedTechs,
               img: coverImageUrl,
               imgs: carouselImageUrls,
               order: nextOrder // Adiciona a ordem calculada
            }])

         if (insertError) {
            throw new Error(`Erro ao salvar projeto: ${insertError.message}`)
         }

         setSuccess('Projeto adicionado com sucesso!')
         // Limpar formulário ou redirecionar
         setTimeout(() => router.push('/admin/dashboard'), 1500) // Redireciona após sucesso

      } catch (err: any) {
         setError(err.message || 'Ocorreu um erro inesperado')
         // TODO: Considerar deletar imagens já upadas em caso de erro posterior
         console.error(err)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className={styles.addProjectContainer}>
         <h1>Adicionar Novo Projeto</h1>
         <Link href="/admin/dashboard" className={styles.backLink}>Voltar para o Dashboard</Link>

         <form onSubmit={handleSubmit} className={styles.addProjectForm}>
            {/* Título */}
            <div className={styles.inputGroup}>
               <label htmlFor="title">Título:</label>
               <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>

            {/* Descrição */}
            <div className={styles.inputGroup}>
               <label htmlFor="description">Descrição:</label>
               <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} required />
            </div>

               {/* Link */}
            <div className={styles.inputGroup}>
               <label htmlFor="link">Link (URL do projeto ou GitHub):</label>
               <input id="link" type="url" value={link} onChange={e => setLink(e.target.value)} required placeholder="https://..."/>
            </div>

            {/* Tipo */}
            <div className={styles.inputGroup}>
               <label htmlFor="type">Tipo:</label>
               <select id="type" value={type} onChange={e => setType(e.target.value as 'web' | 'mobile')}>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
               </select>
            </div>

            {/* Target */}
            <div className={styles.inputGroupCheck}>
               <input id="target" type="checkbox" checked={target} onChange={e => setTarget(e.target.checked)} />
            <label htmlFor="target">Abrir link em nova aba?</label>
            </div>

            {/* Tecnologias (JSON) */}
            <div className={styles.inputGroup}>
               <label htmlFor="techs">Tecnologias (JSON):</label>
               <textarea
                  id="techs"
                  value={techsString}
                  onChange={e => setTechsString(e.target.value)}
                  rows={4}
                  placeholder='[{"name": "React", "iconName": "SiReact"}, {"name": "CSS", "iconName": "SiCss3"}]'
                  required
               />
               <small>Use o formato JSON: {'[{"name": "Nome", "iconName": "NomeIconeReactIcons"}]'}</small>
            </div>

            {/* Imagem de Capa */}
            <div className={styles.inputGroup}>
               <label htmlFor="coverImage">Imagem de Capa (Obrigatória):</label>
               <input id="coverImage" type="file" accept="image/*" onChange={handleCoverImageChange} required />
            </div>

            {/* Imagens do Carrossel */}
            <div className={styles.inputGroup}>
               <label htmlFor="carouselImages">Imagens do Carrossel (Opcional):</label>
               <input id="carouselImages" type="file" accept="image/*" multiple onChange={handleCarouselImagesChange} />
            </div>


            {error && <p className={styles.errorText}>{error}</p>}
            {success && <p className={styles.successText}>{success}</p>}

            <button type="submit" disabled={loading}>
               {loading ? 'Salvando...' : 'Adicionar Projeto'}
            </button>
         </form>
      </div>
   )
}