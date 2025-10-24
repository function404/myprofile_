'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { createClient } from '^/app/supabase/ClienteSupabase'
import { ITech } from '^/app/data/Projects/ProjectsData'

import styles from '^/app/admin/add-project/add-project.module.css'
import { BsArrowLeft, BsArrowUpLeft } from 'react-icons/bs'

const generateUniqueFileName = (fileName: string) => {
   const extension = fileName.split('.').pop()
   return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${extension}`
}

export default function AddProjectPage() {
   const router = useRouter()
   const supabase = createClient()

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
         try {
            parsedTechs = JSON.parse(techsString)
            if (!Array.isArray(parsedTechs) || parsedTechs.some(t => typeof t.name !== 'string' || typeof t.iconName !== 'string')) {
               throw new Error('Format invalid for technologies')
            }
         } catch (e) {
            throw new Error('Invalid JSON in Technologies field. Check the format [{"name": "React", "iconName": "SiReact"}, ...]')
         }

         if (!coverImageFile) {
            throw new Error('Cover image is required')
         }

         const coverFileName = generateUniqueFileName(coverImageFile.name)
         const { data: coverUploadData, error: coverUploadError } = await supabase.storage
            .from('project-images')
            .upload(`covers/${coverFileName}`, coverImageFile)

         if (coverUploadError) {
            throw new Error(`Error uploading cover image: ${coverUploadError.message}`)
         }

         const { data: coverUrlData } = supabase.storage
            .from('project-images')
            .getPublicUrl(coverUploadData.path)
         coverImageUrl = coverUrlData.publicUrl

         if (carouselImageFiles && carouselImageFiles.length > 0) {
            for (let i = 0; i < carouselImageFiles.length; i++) {
               const file = carouselImageFiles[i]
               const carouselFileName = generateUniqueFileName(file.name)
               const { data: carouselUploadData, error: carouselUploadError } = await supabase.storage
                  .from('project-images')
                  .upload(`carousel/${carouselFileName}`, file)

               if (carouselUploadError) {
                  throw new Error(`Error uploading carousel image ${i + 1}: ${carouselUploadError.message}`)
               }

               const { data: carouselUrlData } = supabase.storage
                  .from('project-images')
                  .getPublicUrl(carouselUploadData.path)
               carouselImageUrls.push(carouselUrlData.publicUrl)
            }
         }

         const { data: lastOrderData, error: orderError } = await supabase
            .from('projects')
            .select('order')
            .order('order', { ascending: false })
            .limit(1)
            .single()

         if (orderError && orderError.code !== 'PGRST116') {
            throw orderError
         }

         const nextOrder = lastOrderData ? lastOrderData.order + 10 : 10


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
               order: nextOrder
            }])

         if (insertError) {
            throw new Error(`Error saving project: ${insertError.message}`)
         }

         setSuccess('Project added successfully!')
         setTimeout(() => router.push('/admin/dashboard'), 1500)

      } catch (err: any) {
         setError(err.message || 'An unexpected error occurred')
         console.error(err)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className={styles.addProjectContainer}>
         <h1>Add New Project</h1>
         <div className={styles.backLinkContainer}>
            <BsArrowLeft />
            <Link href="/admin/dashboard" className={styles.backLink}>Back to Dashboard</Link>
         </div>

         <form onSubmit={handleSubmit} className={styles.addProjectForm}>
            {/* Title */}
            <div className={styles.inputGroup}>
               <label htmlFor="title">Title:</label>
               <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>

            {/* Description */}
            <div className={styles.inputGroup}>
               <label htmlFor="description">Description:</label>
               <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} required />
            </div>

               {/* Link */}
            <div className={styles.inputGroup}>
               <label htmlFor="link">Link (Project or GitHub URL):</label>
               <input id="link" type="url" value={link} onChange={e => setLink(e.target.value)} required placeholder="https://..."/>
            </div>

            {/* Type */}
            <div className={styles.inputGroup}>
               <label htmlFor="type">Type:</label>
               <select id="type" value={type} onChange={e => setType(e.target.value as 'web' | 'mobile')}>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
               </select>
            </div>

            {/* Target */}
            <div className={styles.inputGroupCheck}>
               <input id="target" type="checkbox" checked={target} onChange={e => setTarget(e.target.checked)} />
            <label htmlFor="target">Open link in new tab?</label>
            </div>

            {/* Technologies (JSON) */}
            <div className={styles.inputGroup}>
               <label htmlFor="techs">Technologies (JSON):</label>
               <textarea
                  id="techs"
                  value={techsString}
                  onChange={e => setTechsString(e.target.value)}
                  rows={4}
                  placeholder='[{"name": "React", "iconName": "SiReact"}, {"name": "CSS", "iconName": "SiCss3"}]'
                  required
               />
               <small>Use the JSON format: {'[{"name": "Name", "iconName": "NameIconReactIcons"}]'}</small>
            </div>

            {/* Cover Image */}
            <div className={styles.inputGroup}>
               <label htmlFor="coverImage">Cover Image (Required):</label>
               <input id="coverImage" type="file" accept="image/*" onChange={handleCoverImageChange} required />
            </div>

            {/* Carousel Images */}
            <div className={styles.inputGroup}>
               <label htmlFor="carouselImages">Carousel Images (Optional):</label>
               <input id="carouselImages" type="file" accept="image/*" multiple onChange={handleCarouselImagesChange} />
            </div>


            {error && <p className={styles.errorText}>{error}</p>}
            {success && <p className={styles.successText}>{success}</p>}

            <button type="submit" disabled={loading}>
               {loading ? 'Saving...' : 'Add Project'}
            </button>
         </form>
      </div>
   )
}