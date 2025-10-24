'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaArrowUp, FaArrowDown, FaPlus } from 'react-icons/fa'

import { createClient } from '^/app/supabase/ClienteSupabase'
import { IProject } from '^/app/data/Projects/ProjectsData'

import styles from '^/app/admin/dashboard/dashboard.module.css'

export default function DashboardPage() {
  const router = useRouter()
  const supabase = createClient()

  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)

   const fetchProjects = async () => {
      setError(null)
      try {
         const { data, error: projectsError } = await supabase
            .from('projects')
            .select('*')
            .order('order', { ascending: true })

         if (projectsError) throw projectsError
         if (data) setProjects(data as IProject[])

      } catch (err: any) {
         setError('Falha ao carregar projetos')
         console.error(err)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      const loadDashboardData = async () => {
         setLoading(true)
         const { data: { session } } = await supabase.auth.getSession();
         if (session?.user) {
            setUserEmail(session.user.email ?? null);
            await fetchProjects()
         } else {
            console.warn("User not authenticated, redirecting to login.");
            router.push('/admin/login')
         }
      }
      loadDashboardData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [supabase])

   const handleLogout = async () => {
      await supabase.auth.signOut()
      router.push('/admin/login')
   }

   const handleMove = async (index: number, direction: 'up' | 'down') => {
      const currentProject = projects[index]
      const swapIndex = direction === 'up' ? index - 1 : index + 1

      if (swapIndex < 0 || swapIndex >= projects.length) {
         return
      }

      const swapProject = projects[swapIndex]

      const currentOrder = currentProject.order
      const swapOrder = swapProject.order

      const optimisticProjects = [...projects]
      optimisticProjects[index] = { ...currentProject, order: swapOrder }
      optimisticProjects[swapIndex] = { ...swapProject, order: currentOrder }
      optimisticProjects.sort((a, b) => a.order - b.order)
      setProjects(optimisticProjects)

      try {
         const { error: error1 } = await supabase
            .from('projects')
            .update({ order: swapOrder })
            .eq('id', currentProject.id)

         const { error: error2 } = await supabase
            .from('projects')
            .update({ order: currentOrder })
            .eq('id', swapProject.id)

         if (error1 || error2) {
            throw error1 || error2
         }

      } catch (err: any) {
         setError('Failed to reorder project. Reverting.')
         console.error(err)
         await fetchProjects()
      }
   }

   return (
      <div className={styles.dashboardContainer}>
         <header className={styles.header}>
            <h1>Project Dashboard</h1>
            <div>
               {userEmail && <span className={styles.userEmail}>{userEmail}</span>}
               <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
            </div>
         </header>

         <div className={styles.controls}>
            <Link href="/admin/add-project" className={styles.addButton}>
               <FaPlus /> Add Project
            </Link>
         </div>

         {loading && <p>Loading projects...</p>}
         {error && <p className={styles.errorText}>{error}</p>}

         {!loading && !error && (
            <ul className={styles.projectList}>
               {projects.map((project, index) => (
                  <li key={project.id} className={styles.projectItem}>
                     <span>{project.title} (Order: {project.order})</span>
                     <div className={styles.orderButtons}>
                        <button
                           onClick={() => handleMove(index, 'up')}
                           disabled={index === 0}
                           aria-label="Mover para cima"
                        >
                           <FaArrowUp />
                        </button>
                        <button
                           onClick={() => handleMove(index, 'down')}
                           disabled={index === projects.length - 1}
                           aria-label="Mover para baixo"
                        >
                           <FaArrowDown />
                        </button>
                     </div>
                  </li>
               ))}
               {projects.length === 0 && <p>No projects found.</p>}
            </ul>
         )}
      </div>
   )
}