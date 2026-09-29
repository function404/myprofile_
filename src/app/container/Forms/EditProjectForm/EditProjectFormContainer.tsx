'use client'

import Image from 'next/image'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'
import { selectableTechnologies } from '^/app/data/Technologies/TechnologiesData'

import styles from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.module.css'
import { useEditProjectFormContainer } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.rules'
import { IEditProjectFormContainerProps } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.types'

export function EditProjectFormContainer({ project }: IEditProjectFormContainerProps) {
   const {      
      state,
      formAction,
      currentProject,
      checkSelected
   } = useEditProjectFormContainer({ project })

   return (
      <form
         action={formAction}
         className={styles.containerForm}
         key={currentProject.id}
      >
         <input type="hidden" name="id" value={currentProject.id} />

         <div className={styles.bentoFormGrid}>
            
            {/* Secão 1: Informações Básicas */}
            <div className={styles.formSection}>
               <h3 className={styles.sectionTitle}>Basic Info</h3>
               
               <div className={styles.inputGroup}>
                  <label className={styles.label}>Title</label>
                  <input
                     type="text"
                     name="title"
                     className={styles.input}
                     defaultValue={currentProject.title}
                     required
                  />
               </div>

               <div className={styles.inputGroup}>
                  <label className={styles.label}>Description</label>
                  <textarea
                     name="description"
                     className={styles.textarea}
                     defaultValue={currentProject.description ?? ''}
                     rows={4}
                  />
               </div>

               <div className={styles.rowInputs}>
                  <div className={styles.inputGroup}>
                     <label className={styles.label}>Platform Type</label>
                     <select
                        name="type"
                        className={styles.input}
                        defaultValue={currentProject.type ?? 'web'}
                     >
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* Secão 2: Mídia e Links */}
            <div className={styles.formSection}>
               <h3 className={styles.sectionTitle}>Media & Links</h3>
               
               <div className={styles.inputGroup}>
                  <label className={styles.label}>Project URL (Deploy or GitHub)</label>
                  <input
                     type="url"
                     name="link"
                     className={styles.input}
                     defaultValue={currentProject.link ?? ''}
                  />
               </div>

               <div className={styles.inputGroup}>
                  <label className={styles.label}>Replace Main Image (Optional)</label>
                  {currentProject.img && (
                     <div className={styles.currentImagePreview}> 
                        <Image 
                           priority 
                           className={styles.imgPreview} 
                           src={currentProject.img}
                           alt="Current main"
                           width={80}
                           height={50}
                        />
                     </div>
                  )}
                  <div className={styles.fileUploadWrapper}>
                     <input
                        type="file"
                        name="imgFile"
                        className={styles.fileInput}
                        accept="image/*"
                     />
                  </div>
               </div>

               <div className={styles.inputGroup}>
                  <label className={styles.label}>Replace Gallery Images (Optional)</label>
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
                                 width={50}
                                 height={50}
                              /> 
                           ))} 
                        </div>
                     </div> 
                  )}
                  <div className={styles.fileUploadWrapper}>
                     <input
                        type="file"
                        name="imgsFiles"
                        className={styles.fileInput}
                        accept="image/*"
                        multiple
                     />
                  </div>
               </div>

               <div className={styles.optionsWrapper}>
                  <div className={styles.checkboxContainer}>
                     <input
                        type="checkbox"
                        name="target"
                        id="target"
                        defaultChecked={currentProject.target ?? true}
                     />
                     <label htmlFor="target">Open link in new tab (_blank)</label>
                  </div>

                  <div className={styles.checkboxContainer}>
                     <input
                        type="checkbox"
                        name="is_public"
                        id="is_public"
                        defaultChecked={currentProject.is_public ?? true}
                     />
                     <label htmlFor="is_public">Public Project (Visible to all)</label>
                  </div>
               </div>
            </div>

            {/* Secão 3: Tecnologias (Full Width) */}
            <div className={`${styles.formSection} ${styles.fullWidth}`}>
               <h3 className={styles.sectionTitle}>Tech Stack</h3>
               <div className={styles.techSelectionGrid}>
                  {selectableTechnologies.map((tech) => {
                     const IconComponent = tech.icon;
                     return (
                        <div key={tech.formValue} className={styles.techCheckboxItem}>
                           <input
                              type="checkbox"
                              id={`edit-tech-${tech.formValue}`}
                              name="techs"
                              value={tech.formValue}
                              defaultChecked={checkSelected(tech.formValue)}
                           />
                           <label htmlFor={`edit-tech-${tech.formValue}`}>
                              {IconComponent && <IconComponent size={18} style={{ color: tech.color || '#fff' }} />}
                              <span>{tech.name}</span>
                           </label>
                        </div>
                     )
                  })}
               </div>
            </div>
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
      </form>
   )
}
