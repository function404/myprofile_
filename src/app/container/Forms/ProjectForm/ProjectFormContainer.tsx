'use client'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'

import { selectableTechnologies } from '^/app/data/Technologies/TechnologiesData'

import styles from '^/app/container/Forms/ProjectForm/ProjectFormContainer.module.css'
import { useProjectFormContainerRules } from '^/app/container/Forms/ProjectForm/ProjectFormContainer.rules'

export function ProjectFormContainer() {
   const { formRef, state, formAction } = useProjectFormContainerRules()

   return (
      <form ref={formRef} action={formAction} className={styles.containerForm}>
         <div className={styles.contentForm}>
            {/* Title */}
            <label className={styles.label}>Title:</label>
            <input
               type="text"
               name="title"
               className={styles.input}
               placeholder="My New Project"
               required
            />

            {/* Description */}
            <label className={styles.label}>Description:</label>
            <textarea
               name="description"
               className={styles.textarea}
               placeholder="Description..."
               rows={3}
            />

            {/* Main Link */}
            <label className={styles.label}>Link (Deploy or GitHub):</label>
            <input
               type="text"
               name="link"
               className={styles.input}
               placeholder="https://..."
            />

            {/* Main Image Upload */}
            <label className={styles.label}>Main Image File:</label>
            <input
               type="file"
               name="imgFile"
               className={styles.input}
               accept="image/*"
            />

            {/* Additional Images Upload (Gallery) */}
            <label className={styles.label}>Gallery Image Files (optional):</label>
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
               {selectableTechnologies.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                     <div 
                        key={tech.formValue} 
                        className={styles.techCheckboxItem}
                     >
                        <input
                           type="checkbox"
                           id={`tech-${tech.formValue}`}
                           name="techs"
                           value={tech.formValue}
                        />
                        <label htmlFor={`tech-${tech.formValue}`}>
                           {IconComponent && <IconComponent size={16} />}
                           {tech.name}
                        </label>
                     </div>
                  )
               })}
            </div>

            {/* Type */}
            <label className={styles.label}>Type:</label>
            <select name="type" className={styles.input} defaultValue="web">
               <option value="web">Web</option>
               <option value="mobile">Mobile</option>
            </select>

            {/* Order */}
            <label className={styles.label}>Order:</label>
            <input type="number" name="order" className={styles.input} defaultValue="0" />

            {/* Target */}
            <div className={styles.checkboxContainer}>
               <input type="checkbox" name="target" id="target" defaultChecked />
               <label htmlFor="target">{`Open link in new tab (target="_blank")`}</label>
            </div>

            {/* Status Messages */}
            {state.message && (
               <div className={state.type === 'success' ? styles.alertSuccess : styles.alertError}>
                  {state.message}
               </div>
            )}

            <SubmitButtonComponent defaultText="Add Project" />
         </div>
      </form>
   )
}