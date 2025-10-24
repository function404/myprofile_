'use client'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'

import styles from '^/app/container/Forms/ProjectForm/ProjectFormContainer.module.css'
import { useProjectFormContainerRules } from './ProjectFormContainer.rules'

export function ProjectFormContainer() {
   const { formRef, state, formAction } = useProjectFormContainerRules()

   return (
      <form
         ref={formRef}
         action={formAction}
         className={styles.containerForm}
      >
         <div className={styles.contentForm}>
            {/* Title */}
            <label className={styles.label}>Title:</label>
            <input type="text" name="title" className={styles.input} placeholder="My New Project" required />

            {/* Description */}
            <label className={styles.label}>Description:</label>
            <textarea name="description" className={styles.textarea} placeholder="Description..." rows={3} />

            {/* Main Link */}
            <label className={styles.label}>Link (Deploy or GitHub):</label>
            <input type="text" name="link" className={styles.input} placeholder="https://..." />

            {/* Main Image */}
            <label className={styles.label}>Main Image URL:</label>
            <input type="text" name="img" className={styles.input} placeholder="https://.../image.png" />
            
            {/* Additional Images (Gallery) */}
            <label className={styles.label}>Gallery Image URLs (comma-separated):</label>
            <textarea name="imgs" className={styles.textarea} placeholder="url1.png, url2.png, ..." rows={2} />

            {/* Techs */}
            <label className={styles.label}>Technologies (Format: Name,IconName;Name2,IconName2):</label>
            <input type="text" name="techs" className={styles.input} placeholder="NextJS,SiNextdotjs;React,SiReact" />

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

            <SubmitButtonComponent />
         </div>
      </form>
   )
}