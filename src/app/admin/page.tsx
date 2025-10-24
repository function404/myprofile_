import { redirect } from 'next/navigation'
import Link from 'next/link'

import { DeleteButtonComponent } from '^/app/components/DeleteButton/DeleteButtonComponent'

import { ProjectFormContainer } from '^/app/container/Forms/ProjectForm/ProjectFormContainer'

import type { IProject } from '^/app/data/Projects/ProjectsData'

import { createClient } from '^/app/supabase/ServerSupabase'

import titleStyles from '^/theme/Title/Title.module.css'

import { signOut } from '^/app/admin/admin.actions'
import styles from '^/app/admin/admin.module.css'

export default async function AdminPage() {
   const supabase = createClient()

   const { data: { user } } = await supabase.auth.getUser()
   if (!user) {
      redirect('/login')
   }

   const { data: projects, error: fetchError } = await supabase
      .from('projects')
      .select('*')
      .order('order', { ascending: true })
      .order('created_at', { ascending: false })

   if (fetchError) {
      console.error("Erro ao buscar projetos:", fetchError)
   }

   return (
      <div className={styles.adminContainer}>
         <header className={styles.adminHeader}>
            <p>Logado como: <span>{user.email}</span></p>
            <form action={signOut}>
               <button type="submit" className={styles.logoutButton}>
                  Sign Out
               </button>
            </form>
         </header>

         <div className={titleStyles.title}>
            <h2 data-text="Add Project" className={titleStyles.titleH2}>
               Add Project
            </h2>
         </div>

         <div className={styles.centerContainer}>
            <ProjectFormContainer />
         </div>

         <div className={titleStyles.title} style={{ marginTop: '60px' }}>
            <h2 data-text="Manage Projects" className={titleStyles.titleH2}>
               Manage Projects
            </h2>
         </div>

         <div className={styles.centerContainer}>
            {fetchError ? (
               <p className={styles.alertError}>Error loading projects: {fetchError.message}</p>
            ) : !projects || projects.length === 0 ? (
               <p className={styles.noProjectsMessage}>No projects registered yet.</p>
            ) : (
               <ul className={styles.projectList}>
                  {(projects as IProject[]).map((project) => (
                  <li key={project.id} className={styles.projectListItem}>
                     <div className={styles.projectInfo}>
                        <span className={styles.projectOrder}>#{project.order ?? 'N/A'}</span>
                        <span className={styles.projectTitle}>{project.title}</span>
                        <span className={styles.projectType}>({project.type})</span>
                     </div>

                     <div className={styles.projectActions}>
                        <Link href={`/admin/edit/${project.id}`} className={styles.editButton}>
                           Edit
                        </Link>
                        <DeleteButtonComponent projectId={project.id} />
                     </div>
                  </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   )
}