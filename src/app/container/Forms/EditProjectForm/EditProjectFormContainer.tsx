'use client'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'

import styles from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.module.css'
import { IEditProjectFormContainerProps } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.types'
import { useEditProjectFormContainer } from './EditProjectFormContainer.rules'

export function EditProjectFormContainer({ 
   project 
}: IEditProjectFormContainerProps) {
   const {      
      state,
      formAction,
      currentProject,
      formatTechsForInput,
      formatImgsForInput,
   } = useEditProjectFormContainer({ project })

   return (
      <form
         action={formAction}
         className={styles.containerForm}
         key={currentProject.id}
      >
         {/* Hidden field with project ID */}
         <input type="hidden" name="id" value={currentProject.id} />

         <div className={styles.contentForm}>
            {/* Title */}
            <label className={styles.label}>Title:</label>
            <input 
               type="text" name="title" 
               className={styles.input} 
               defaultValue={currentProject.title} 
               required
            />

            {/* Description */}
            <label className={styles.label}>Description:</label>
            <textarea 
               name="description" 
               className={styles.textarea} 
               defaultValue={currentProject.description ?? ''} rows={3}
            />

            {/* Main Link */}
            <label className={styles.label}>Link (Deploy ou GitHub):</label>
            <input 
               type="text" name="link" 
               className={styles.input} 
               defaultValue={currentProject.link ?? ''}
            />

            {/* Main Image */}
            <label className={styles.label}>Main Image URL:</label>
            <input 
               type="text" name="img" 
               className={styles.input} 
               defaultValue={currentProject.img ?? ''}
            />

            {/* Additional Images (Gallery) */}
            <label className={styles.label}>
               Gallery Image URLs (comma-separated):
            </label>
            <textarea name="imgs" 
               className={styles.textarea} 
               defaultValue={formatImgsForInput(currentProject.imgs)} rows={2}
            />

            {/* Techs */}
            <label className={styles.label}>
               Technologies (Format: Name,IconName;Name2,IconName2):
            </label>
            <input 
               type="text" name="techs" 
               className={styles.input} 
               defaultValue={formatTechsForInput(currentProject.techs)}
            />

            {/* Type */}
            <label className={styles.label}>Type:</label>
            <select 
               name="type" className={styles.input} 
               defaultValue={currentProject.type ?? 'web'}
            >
               <option value="web">Web</option>
               <option value="mobile">Mobile</option>
            </select>

            {/* Order */}
            <label className={styles.label}>Order:</label>
            <input 
               type="number" name="order" 
               className={styles.input} defaultValue={currentProject.order ?? 0} 
            />

            {/* Target */}
            <div className={styles.checkboxContainer}>
               <input 
                  type="checkbox" name="target" 
                  id="target" defaultChecked={currentProject.target ?? true}
               />
               <label htmlFor="target">
                  {`Abrir link em nova aba (target="_blank")`}
               </label>
            </div>

            {/* Status Messages */}
            {state.message && (
               <div 
                  className={state.type === 'success' 
                     ? styles.alertSuccess 
                     : styles.alertError}
                  >
                  {state.message}
               </div>
            )}

            <SubmitButtonComponent 
               pendingText="Updating..."
               defaultText="Save Changes" 
            />
         </div>
      </form>
   )
}