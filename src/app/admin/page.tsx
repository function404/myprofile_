import { redirect } from 'next/navigation'
import Link from 'next/link'

import { ProjectFormContainer } from '^/app/container/Forms/ProjectForm/ProjectFormContainer'
import { ManageProjectsList } from '^/app/components/ManageProjectsList/ManageProjectsList'

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
      console.error("Error fetching projects:", fetchError)
   }

   return (
      <div className={styles.adminContainer}>
         <header className={styles.adminHeader}>
            <Link href="/" className={styles.backToPortfolioLink}>
               &larr; Back to Portfolio
            </Link>
            <p>Logged in as: <span>{user.email}</span></p>
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
            ) : (
               <ManageProjectsList initialProjects={(projects as IProject[]) || []} />
            )}
         </div>
      </div>
   )
}
