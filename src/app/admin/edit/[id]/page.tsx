import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'

import { EditProjectFormContainer } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer'

import type { IProject } from '^/app/data/Projects/ProjectsData'

import { createClient } from '^/app/supabase/ServerSupabase'

import { signOut } from '^/app/admin/admin.actions'
import styles from '^/app/admin/admin.module.css'

import titleStyles from '^/theme/Title/Title.module.css'

import { IEditPageProps } from '^/app/admin/edit/[id]/edit.types'

export default async function EditProjectPage({ params }: IEditPageProps) {
   const supabase = createClient()
   const projectId = Number(params.id)

   const { data: { user } } = await supabase.auth.getUser()
   if (!user) {
      redirect('/login')
   }

   const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single()

   if (error || !project) {
      console.error("Erro ao buscar projeto para edição:", error)
      notFound()
   }

   return (
      <div className={styles.adminContainer}>
         <header className={styles.adminHeader}>
            <Link href="/admin" className={styles.backButton}>&larr; Voltar para Admin</Link>
            <form action={signOut}>
               <button type="submit" className={styles.logoutButton}>
                  Sign Out
               </button>
            </form>
         </header>

         <div className={titleStyles.title}>
            <h2 data-text="Editar Projeto" className={titleStyles.titleH2}>
               Editar Projeto
            </h2>
         </div>

         <div className={styles.centerContainer}>
            <EditProjectFormContainer project={project as IProject} />
         </div>
      </div>
   )
}