'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from '^/app/supabase/ServerSupabase'

import type { IProject, ITech } from '^/app/data/Projects/ProjectsData'

import { IFormState } from '^/app/admin/admin.types'

/**
 * Faz upload de um arquivo para o Supabase Storage e retorna a URL pública.
 * @param    Instância do cliente Supabase
 * @param file Arquivo a ser enviado
 * @param bucket Nome do bucket de armazenamento
 * @param folder Pasta dentro do bucket onde o arquivo será armazenado
 * @returns URL pública do arquivo enviado ou null se o arquivo for inválido
*/
async function uploadImage(
   supabase: ReturnType<typeof createClient>,
   file: File,
   bucket: string,
   folder: string
): Promise<string | null> {
   if (!file || file.size === 0) {
      return null
   }
   /**
    * Gera um nome de arquivo único para evitar conflitos
    * Exemplo de nome de arquivo: project-123-main/1627891234567-image_name.png
   */
   const fileName = `${folder}/${Date.now()}-${file.name.replace(/\s+/g, '_')}`
   const { data, error } = await supabase.storage.from(bucket).upload(fileName, file)

   if (error) {
      console.error('Supabase Storage Upload Error:', error)
      throw new Error(`Failed to upload ${file.name}: ${error.message}`)
   }

   const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(data.path)

   if (!publicUrlData || !publicUrlData.publicUrl) {
      throw new Error(`Failed to get public URL for ${file.name}`)
   }

   return publicUrlData.publicUrl
}

/**
 * Parseia os dados do formulário, faz upload das imagens e retorna um objeto de projeto.
 * @param supabase Instância do cliente Supabase
 * @param formData Dados do formulário
 * @param existingProject Projeto existente (opcional, para updates)
 * @returns Dados do projeto prontos para inserção/atualização no banco
*/
async function parseProjectFormDataWithUploads(
   supabase: ReturnType<typeof createClient>,
   formData: FormData,
   existingProject?: IProject
): Promise<Omit<IProject, 'id' | 'created_at'>> {
   const title = formData.get('title') as string
   const description = formData.get('description') as string | null
   const link = formData.get('link') as string | null
   const type = formData.get('type') as 'web' | 'mobile'
   const order = Number(formData.get('order') || 0)
   const target = formData.get('target') === 'on'

   const techValues = formData.getAll('techs') as string[]
   const techs: ITech[] = techValues
      .map((t) => {
         const [name, iconName] = t.split(',').map((s) => s.trim())
         return name && iconName ? { name, iconName } : null
      })
      .filter((t): t is ITech => t !== null)

   const imgFile = formData.get('imgFile') as File | null

   let imgUrl: string | null = existingProject?.img ?? null

   if (imgFile && imgFile.size > 0) {
      console.log(`Uploading main image: ${imgFile.name}`)
      imgUrl = await uploadImage(supabase, imgFile, 'project-images', `project-${existingProject?.id ?? 'new'}-main`)

      if (!imgUrl) throw new Error('Main image upload failed but file was present.')
      console.log(`Main image uploaded to: ${imgUrl}`)
   }

   const imgsFiles = formData.getAll('imgsFiles') as File[]
   let galleryUrls: string[] = existingProject?.imgs ?? []

   const filesToUpload = imgsFiles.filter(file => file && file.size > 0)

   if (filesToUpload.length > 0) {
      console.log(`Uploading ${filesToUpload.length} gallery images in parallel...`)
      
      const uploadPromises = filesToUpload.map(file =>
         uploadImage(supabase, file, 'project-images', `project-${existingProject?.id ?? 'new'}-gallery`)
      )

      const uploadedUrls = await Promise.all(uploadPromises)

      const validUrls = uploadedUrls.filter((url): url is string => url !== null)
      console.log(`Gallery images uploaded: ${validUrls.length} successful.`)

      galleryUrls = validUrls
   }

   return {
      title,
      description: description ?? '',
      img: imgUrl ?? '',
      link: link ?? '',
      type,
      order,
      target,
      techs,
      imgs: galleryUrls,
   }
}

/**
 * Adiciona um novo projeto ao banco de dados.
 * @param prevState Estado anterior do formulário
 * @param formData Dados do formulário
 * @returns Novo estado do formulário após a operação
*/
export async function addProject(
   prevState: IFormState,
   formData: FormData
): Promise<IFormState> {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()

   if (!user) return { message: 'Não autorizado.', type: 'error' }

   console.log("Attempting to add project...")
   try {
      const projectData = await parseProjectFormDataWithUploads(supabase, formData)
      console.log("Project data parsed, attempting insert:", projectData)

      const { error } = await supabase.from('projects').insert(projectData)

      if (error) {
         console.error('Supabase insert error:', error)
         throw error
      }

      console.log("Project added successfully!")
      revalidatePath('/')
      revalidatePath('/admin')
      return { message: 'Projeto adicionado com sucesso!', type: 'success' }
   } catch (e: any) {
      console.error('Add Project Server Action Failed:', e)

      const errorMessage = 
         e instanceof Error 
            ? e.message 
            : 'Ocorreu um erro desconhecido no servidor.'

      return { message: `Erro ao adicionar: ${errorMessage}`, type: 'error' }
   }
}

/**
 * Atualiza um projeto existente no banco de dados.
 * @param prevState Estado anterior do formulário
 * @param formData Dados do formulário
 * @returns Novo estado do formulário após a operação
*/
export async function updateProject(
   prevState: IFormState,
   formData: FormData
): Promise<IFormState> {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()
   if (!user) return { message: 'Não autorizado.', type: 'error' }

   const projectId = Number(formData.get('id'))
   if (!projectId) return { message: 'ID do projeto inválido.', type: 'error' }

   try {
      const { data: existingProject, error: fetchError } = await supabase
         .from('projects')
         .select('img, imgs')
         .eq('id', projectId)
         .single()

      if (fetchError) {
         console.error('Error fetching existing project for update:', fetchError)
      }

      const projectData = await parseProjectFormDataWithUploads(supabase, formData, existingProject as IProject | undefined)

      const { error } = await supabase
         .from('projects')
         .update(projectData)
         .eq('id', projectId)

      if (error) throw error

      revalidatePath('/')
      revalidatePath('/admin')
      revalidatePath(`/admin/edit/${projectId}`)
      return { message: 'Projeto atualizado com sucesso!', type: 'success' }
   } catch (e: any) {
      console.error('Update Project Error:', e)
      return { message: `Erro ao atualizar: ${e.message}`, type: 'error' }
   }
}

/**
 * Deleta um projeto do banco de dados e remove suas imagens do Supabase Storage.
 * @param formData Dados do formulário contendo o ID do projeto a ser deletado
 * @returns Estado do formulário após a operação
*/
export async function deleteProject(formData: FormData): Promise<{ message: string; type: 'success' | 'error' }> {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()
   if (!user) return { message: 'Não autorizado.', type: 'error' }

   const projectId = Number(formData.get('id'))
   if (!projectId) return { message: 'ID do projeto inválido.', type: 'error' }

   try {
      /**
       * Buscar as URLs das imagens ANTES de deletar o registro do DB
       */
      const { data: projectImages, error: fetchError } = await supabase
         .from('projects')
         .select('img, imgs')
         .eq('id', projectId)
         .single()

      if (fetchError && fetchError.code !== 'PGRST116') {
         console.error('Error fetching project images before delete:', fetchError)
      }

      /**
       * Deleta o registro do projeto no banco de dados.
       */
      const { error: deleteDbError } = await supabase
         .from('projects')
         .delete()
         .eq('id', projectId)

      if (deleteDbError) throw deleteDbError

      /**
       * Deletar imagens do Storage (se encontradas)
      */
      if (projectImages) {
         const urlsToDelete: string[] = []

         if (projectImages.img) {
            urlsToDelete.push(projectImages.img)
         }

         if (projectImages.imgs && projectImages.imgs.length > 0) {
            urlsToDelete.push(...projectImages.imgs)
         }

         /**
          * Extrai os caminhos dos arquivos a partir das URLs públicas para deletar do Storage
         */
         const filePathsToDelete = urlsToDelete.map(url => {
            try {
               const urlParts = new URL(url)
               const path = urlParts.pathname.split('/project-images/')[1]
               return path ? decodeURIComponent(path) : null
            } catch (e) {
               console.error("Error parsing URL for deletion:", url, e)
               return null
            }
         }).filter((path): path is string => path !== null)


         if (filePathsToDelete.length > 0) {
            console.log("Attempting to delete from storage:", filePathsToDelete)
            const { data: deleteData, error: deleteStorageError } = await supabase.storage
               .from('project-images')
               .remove(filePathsToDelete)

            if (deleteStorageError) {
               console.error('Error deleting files from Supabase Storage:', deleteStorageError)
            } else {
               console.log("Storage deletion result:", deleteData)
            }
         }
      }


      revalidatePath('/')
      revalidatePath('/admin')
      return { message: 'Projeto deletado com sucesso!', type: 'success' }
   } catch (e: any) {
      console.error('Delete Project Error:', e)
      return { message: `Erro ao deletar: ${e.message}`, type: 'error' }
   }
}

/**
 * Faz logout do usuário atual e redireciona para a página de login.
*/
export async function signOut() {
   const supabase = createClient()
   await supabase.auth.signOut()
   redirect('/login')
}