'use client'

import { useState, useEffect } from 'react'
import { Reorder } from 'framer-motion'
import Link from 'next/link'
import { MdDragIndicator } from 'react-icons/md'
import RingLoader from 'react-spinners/RingLoader'

import { DeleteButtonComponent } from '^/app/components/DeleteButton/DeleteButtonComponent'
import type { IProject } from '^/app/data/Projects/ProjectsData'
import { updateProjectsOrder } from '^/app/admin/admin.actions'

import styles from '^/app/components/ManageProjectsList/ManageProjectsList.module.css'

interface IManageProjectsListProps {
   initialProjects: IProject[]
}

export function ManageProjectsList({ initialProjects }: IManageProjectsListProps) {
   const [projects, setProjects] = useState<IProject[]>(initialProjects)
   const [isSaving, setIsSaving] = useState(false)
   const [hasChanged, setHasChanged] = useState(false)
   const [statusMessage, setStatusMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null)

   useEffect(() => {
      setProjects(initialProjects)
      setHasChanged(false)
   }, [initialProjects])

   const handleReorder = (newOrder: IProject[]) => {
      setProjects(newOrder)
      setHasChanged(true)
      setStatusMessage(null)
   }

   const handleSaveOrder = async () => {
      setIsSaving(true)
      
      const updates = projects.map((proj, index) => ({
         id: proj.id,
         order: index
      }))

      const res = await updateProjectsOrder(updates)
      
      setIsSaving(false)
      
      if (res.type === 'success') {
         setHasChanged(false)
         setStatusMessage({ text: 'Ordem atualizada e salva!', type: 'success' })
         // Atualizamos localmente a propriedade 'order'
         setProjects(projects.map((p, i) => ({ ...p, order: i })))
      } else {
         setStatusMessage({ text: res.message, type: 'error' })
      }
      
      setTimeout(() => setStatusMessage(null), 4000)
   }

   if (!projects || projects.length === 0) {
      return <p className={styles.noProjectsMessage}>Nenhum projeto cadastrado.</p>
   }

   return (
      <div className={styles.listContainer}>
         <div className={styles.headerActions}>
            <p className={styles.instructions}>
               <MdDragIndicator size={18} /> 
               Arraste os projetos para alterar a ordem de exibição.
            </p>
            {hasChanged && (
               <button 
                  onClick={handleSaveOrder} 
                  disabled={isSaving}
                  className={styles.saveOrderBtn}
               >
                  {isSaving ? <RingLoader color="#fff" size={16} /> : 'Salvar Nova Ordem'}
               </button>
            )}
         </div>

         {statusMessage && (
            <div className={statusMessage.type === 'success' ? styles.alertSuccess : styles.alertError}>
               {statusMessage.text}
            </div>
         )}

         <Reorder.Group 
            axis="y" 
            values={projects} 
            onReorder={handleReorder} 
            className={styles.projectList}
         >
            {projects.map((project, index) => (
               <Reorder.Item 
                  key={project.id} 
                  value={project}
                  className={styles.projectListItem}
                  whileDrag={{ scale: 1.02, boxShadow: "0 10px 30px rgba(80, 150, 255, 0.4)", cursor: "grabbing" }}
               >
                  <div className={styles.projectInfo}>
                     <div className={styles.dragHandle}>
                        <MdDragIndicator size={24} />
                     </div>
                     <span className={styles.projectOrder}>#{index}</span>
                     <span className={styles.projectTitle}>{project.title}</span>
                     <span className={styles.projectType}>({project.type})</span>
                     <span className={project.is_public ? styles.badgePublic : styles.badgePrivate}>
                        {project.is_public ? '🌐 Público' : '🔒 Privado'}
                     </span>
                  </div>

                  <div className={styles.projectActions}>
                     <Link href={`/admin/edit/${project.id}`} className={styles.editButton}>
                        Editar
                     </Link>
                     <DeleteButtonComponent projectId={project.id} />
                  </div>
               </Reorder.Item>
            ))}
         </Reorder.Group>
      </div>
   )
}
