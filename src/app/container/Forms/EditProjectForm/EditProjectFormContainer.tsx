'use client'

import { SubmitButtonComponent } from '^/app/components/SubmitButton/SubmitButtonComponent'

import styles from '^/app/admin/admin.module.css'

import { IEditProjectFormContainerProps } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.types'
import { useEditProjectFormContainer } from './EditProjectFormContainer.rules'

export function EditProjectFormContainer({ project }: IEditProjectFormContainerProps) {
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
         {/* Campo oculto com o ID do projeto */}
         <input type="hidden" name="id" value={currentProject.id} />

         <div className={styles.contentForm}>
         {/* Título */}
         <label className={styles.label}>Título:</label>
         <input type="text" name="title" className={styles.input} defaultValue={currentProject.title} required />

         {/* Descrição */}
         <label className={styles.label}>Descrição:</label>
         <textarea name="description" className={styles.textarea} defaultValue={currentProject.description ?? ''} rows={3} />

         {/* Link Principal */}
         <label className={styles.label}>Link (Deploy ou GitHub):</label>
         <input type="text" name="link" className={styles.input} defaultValue={currentProject.link ?? ''} />

         {/* Imagem Principal */}
         <label className={styles.label}>URL da Imagem Principal:</label>
         <input type="text" name="img" className={styles.input} defaultValue={currentProject.img ?? ''} />

         {/* Imagens Adicionais (Galeria) */}
         <label className={styles.label}>URLs das Imagens da Galeria (separadas por vírgula):</label>
         <textarea name="imgs" className={styles.textarea} defaultValue={formatImgsForInput(currentProject.imgs)} rows={2} />

         {/* Techs */}
         <label className={styles.label}>Tecnologias (Formato: Nome,IconName;Nome2,IconName2):</label>
         <input type="text" name="techs" className={styles.input} defaultValue={formatTechsForInput(currentProject.techs)} />

         {/* Tipo */}
         <label className={styles.label}>Tipo:</label>
         <select name="type" className={styles.input} defaultValue={currentProject.type ?? 'web'}>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
         </select>

         {/* Ordem */}
         <label className={styles.label}>Ordem:</label>
         <input type="number" name="order" className={styles.input} defaultValue={currentProject.order ?? 0} />

         {/* Target */}
         <div className={styles.checkboxContainer}>
            <input type="checkbox" name="target" id="target" defaultChecked={currentProject.target ?? true} />
            <label htmlFor="target">{`Abrir link em nova aba (target="_blank")`}</label>
         </div>

         {/* Mensagens de Status */}
         {state.message && (
            <div className={state.type === 'success' ? styles.alertSuccess : styles.alertError}>
               {state.message}
            </div>
         )}

         {/* Botão usa a mesma lógica do SubmitButton, mas pode ter texto diferente */}
         <SubmitButtonComponent 
            pendingText="Atualizando..."
            defaultText="Salvar Alterações" 
         />
         </div>
      </form>
   )
}