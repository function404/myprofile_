'use client'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'
import { selectableTechnologies } from '^/app/data/Technologies/TechnologiesData'

import styles from '^/app/container/Forms/ProjectForm/ProjectFormContainer.module.css'
import { useProjectFormContainerRules } from '^/app/container/Forms/ProjectForm/ProjectFormContainer.rules'

export function ProjectFormContainer() {
   const { formRef, state, formAction } = useProjectFormContainerRules()

   return (
      <form ref={formRef} action={formAction} className={styles.containerForm}>
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
                     placeholder="Project name"
                     required
                  />
               </div>

               <div className={styles.inputGroup}>
                  <label className={styles.label}>Description</label>
                  <textarea
                     name="description"
                     className={styles.textarea}
                     placeholder="Brief description of the project..."
                     rows={4}
                  />
               </div>

               <div className={styles.rowInputs}>
                  <div className={styles.inputGroup}>
                     <label className={styles.label}>Platform Type</label>
                     <select name="type" className={styles.input} defaultValue="web">
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
                     placeholder="https://..."
                  />
               </div>

               <div className={styles.inputGroup}>
                  <label className={styles.label}>Main Image (Thumbnail)</label>
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
                  <label className={styles.label}>Gallery Images (Optional)</label>
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
                     <input type="checkbox" name="target" id="target" defaultChecked />
                     <label htmlFor="target">Open link in new tab (_blank)</label>
                  </div>

                  <div className={styles.checkboxContainer}>
                     <input type="checkbox" name="is_public" id="is_public" defaultChecked />
                     <label htmlFor="is_public">Public Project (Visible to all)</label>
                  </div>
               </div>
            </div>

            {/* Secão 3: Tecnologias (Full Width) */}
            <div className={`${styles.formSection} ${styles.fullWidth}`}>
               <h3 className={styles.sectionTitle}>Tech Stack</h3>
               <div className={styles.techSelectionGrid}>
                  {selectableTechnologies.map((tech) => {
                     const IconComponent = tech.icon
                     return (
                        <div key={tech.formValue} className={styles.techCheckboxItem}>
                           <input
                              type="checkbox"
                              id={`tech-${tech.formValue}`}
                              name="techs"
                              value={tech.formValue}
                           />
                           <label htmlFor={`tech-${tech.formValue}`}>
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
            <div className={state.type === 'success' ? styles.alertSuccess : styles.alertError}>
               {state.message}
            </div>
         )}

         <SubmitButtonComponent defaultText="Add Project" />
      </form>
   )
}
