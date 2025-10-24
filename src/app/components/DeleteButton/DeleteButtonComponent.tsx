'use client'

import { useEffect, useRef, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { useFormStatus } from 'react-dom'

import { deleteProject } from '^/app/admin/admin.actions'

import styles from '^/app/components/DeleteButton/DeleteButtonComponent.module.css'
import { IDeleteButtonProps } from '^/app/components/DeleteButton/DeleteButtonComponent.types'

function InnerDeleteButton() {
   const { pending } = useFormStatus()
   return (
      <button
         type="submit"
         disabled={pending}
         className={styles.deleteButton}
      >
         {pending ? (
            <RingLoader color={'rgb(255, 204, 204)'} loading={pending} size={16} />
         ) : (
            'Confirm Deletion'
         )}
      </button>
   )
}

export function DeleteButtonComponent({ projectId }: IDeleteButtonProps) {
   const [state, setState] = useState<{ message: string, type: 'success' | 'error' } | null>(null)
   const [isModalOpen, setIsModalOpen] = useState(false)
   const formRef = useRef<HTMLFormElement>(null)

   const handleDelete = async (formData: FormData) => {
      setIsModalOpen(false) 
      setState(null)
      const result = await deleteProject(formData)
      setState(result)
   }

   useEffect(() => {
      let timer: NodeJS.Timeout
      if (state?.type === 'error') {
         timer = setTimeout(() => setState(null), 5000)
      }
      return () => clearTimeout(timer)
   }, [state])


   return (
      <>
         <form action={handleDelete} ref={formRef}>
            <input type="hidden" name="id" value={projectId} />

            <button
               type="button"
               onClick={() => setIsModalOpen(true)}
               className={styles.deleteButton}
            >
               Delete
            </button>

            {isModalOpen && (
               <div className={styles.modalBackdrop}>
                  <div className={styles.modalContent}>
                     <p>Do you really want to delete this project? This action cannot be undone.</p>
                     <div className={styles.modalActions}>
                        <button
                           type="button"
                           className={styles.cancelButton}
                           onClick={() => setIsModalOpen(false)}
                        >
                           Cancel
                        </button>
                        
                        <InnerDeleteButton />
                     </div>
                  </div>
               </div>
            )}
         </form>

         {state?.type === 'error' && (
            <span className={styles.deleteErrorMessage}>
               {state.message}
            </span>
         )}
      </>
   )
}