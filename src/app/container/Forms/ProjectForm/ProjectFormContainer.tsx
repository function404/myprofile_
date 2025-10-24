'use client'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'

import styles from '^/app/admin/admin.module.css'
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
            {/* Título */}
            <label className={styles.label}>Título:</label>
            <input type="text" name="title" className={styles.input} placeholder="Meu Novo Projeto" required />

            {/* Descrição */}
            <label className={styles.label}>Descrição:</label>
            <textarea name="description" className={styles.textarea} placeholder="Descrição..." rows={3} />

            {/* Link Principal */}
            <label className={styles.label}>Link (Deploy ou GitHub):</label>
            <input type="text" name="link" className={styles.input} placeholder="https://..." />

            {/* Imagem Principal */}
            <label className={styles.label}>URL da Imagem Principal:</label>
            <input type="text" name="img" className={styles.input} placeholder="https://.../imagem.png" />
            
            {/* Imagens Adicionais (Galeria) */}
            <label className={styles.label}>URLs das Imagens da Galeria (separadas por vírgula):</label>
            <textarea name="imgs" className={styles.textarea} placeholder="url1.png, url2.png, ..." rows={2} />

            {/* Techs */}
            <label className={styles.label}>Tecnologias (Formato: Nome,IconName;Nome2,IconName2):</label>
            <input type="text" name="techs" className={styles.input} placeholder="NextJS,SiNextdotjs;React,SiReact" />

            {/* Tipo */}
            <label className={styles.label}>Tipo:</label>
            <select name="type" className={styles.input} defaultValue="web">
               <option value="web">Web</option>
               <option value="mobile">Mobile</option>
            </select>

            {/* Ordem */}
            <label className={styles.label}>Ordem:</label>
            <input type="number" name="order" className={styles.input} defaultValue="0" />

            {/* Target */}
            <div className={styles.checkboxContainer}>
               <input type="checkbox" name="target" id="target" defaultChecked />
               <label htmlFor="target">{`Abrir link em nova aba (target="_blank")`}</label>
            </div>

            {/* Mensagens de Status */}
            {state.message && (
               <div className={state.type === 'success' ? styles.alertSuccess : styles.alertError}>
                  {state.message}
               </div>
            )}

            {/* Botão de Envio (com estado de loading) */}
            <SubmitButtonComponent />
         </div>
      </form>
   )
}