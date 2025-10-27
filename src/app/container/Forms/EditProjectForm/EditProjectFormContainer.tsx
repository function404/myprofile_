'use client'

import Image from 'next/image'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'

import styles from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.module.css'
import { IEditProjectFormContainerProps } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.types'
import { useEditProjectFormContainer } from './EditProjectFormContainer.rules'
import { iconMap, techOptions } from '^/app/data/TechOptions/TechOptionsData'

export function EditProjectFormContainer({ 
   project 
}: IEditProjectFormContainerProps) {
   const {      
      state,
      formAction,
      currentProject,
      formatTechsForInput,
      formatImgsForInput,
      isTechSelected,
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
               type="text"
               name="title"
               className={styles.input}
               defaultValue={currentProject.title}
               required
            />

            {/* Description */}
            <label className={styles.label}>Description:</label>
            <textarea
               name="description"
               className={styles.textarea}
               defaultValue={currentProject.description ?? ''}
               rows={3}
            />

            {/* Main Link */}
            <label className={styles.label}>Link (Deploy ou GitHub):</label>
            <input
               type="text"
               name="link"
               className={styles.input}
               defaultValue={currentProject.link ?? ''}
            />

            {/* Display Current Main Image */}
            <label className={styles.label}>Current Main Image:</label>
            {currentProject.img && (
               <div className={styles.currentImagePreview}>
                  <Image
                     priority
                     className={styles.imgPreview}
                     src={currentProject.img}
                     alt="Current main"
                     width="100"
                     height={250} 
                  />
               </div>
            )}

            {/* Main Image Upload (Optional replacement) */}
            <label className={styles.label}>Replace Main Image (optional):</label>
            <input
               type="file"
               name="imgFile"
               className={styles.input}
               accept="image/*"
            />

            {/* Display Current Gallery Images */}
            <label className={styles.label}>Current Gallery Images:</label>
            {currentProject.imgs && currentProject.imgs.length > 0 && (
               <div className={styles.currentImagePreview}>
                  <div className={styles.galleryPreview}>
                     {currentProject.imgs.map((imgUrl, index) => (
                        <Image
                           key={index}
                           className={styles.imgPreview}
                           priority
                           src={imgUrl}
                           alt={`Current gallery ${index + 1}`}
                           width="80"
                           height={250} 
                        />
                     ))}
                  </div>
               </div>
            )}

            {/* Additional Images Upload (Optional additions/replacement) */}
            {/* NOTE: Handling replacement vs addition needs logic in the Server Action */}
            <label className={styles.label}>Add/Replace Gallery Images (optional):</label>
            <input
               type="file"
               name="imgsFiles"
               className={styles.input}
               accept="image/*"
               multiple
            />

            {/* Techs Selection */}
            <label className={styles.label}>Technologies:</label>
               <div className={styles.techSelectionContainer}>
               {techOptions.map((tech) => {
                  const IconComponent = iconMap[tech.iconName]
                  return (
                     <div key={tech.value} className={styles.techCheckboxItem}>
                     <input
                        required
                        type="checkbox"
                        id={`edit-tech-${tech.value}`}
                        name="techs"
                        value={tech.value}
                        defaultChecked={isTechSelected(tech.value)}
                     />
                     <label htmlFor={`edit-tech-${tech.value}`}>
                        {IconComponent && <IconComponent size={16} />}
                        {tech.name}
                     </label>
                     </div>
                  )
               })}
               </div>

            {/* Type */}
            <label className={styles.label}>Type:</label>
            <select
               name="type"
               className={styles.input}
               defaultValue={currentProject.type ?? 'web'}
            >
               <option value="web">Web</option>
               <option value="mobile">Mobile</option>
            </select>

            {/* Order */}
            <label className={styles.label}>Order:</label>
            <input
               type="number"
               name="order"
               className={styles.input}
               defaultValue={currentProject.order ?? 0}
            />

            {/* Target */}
            <div className={styles.checkboxContainer}>
               <input
                  type="checkbox"
                  name="target"
                  id="target"
                  defaultChecked={currentProject.target ?? true}
               />
               <label htmlFor="target">
                  {`Abrir link em nova aba (target="_blank")`}
               </label>
            </div>

            {/* Status Messages */}
            {state.message && (
               <div
                  className={
                  state.type === 'success'
                     ? styles.alertSuccess
                     : styles.alertError
                  }
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