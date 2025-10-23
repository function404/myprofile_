'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaArrowUp, FaArrowDown, FaPlus } from 'react-icons/fa'

import { createClient } from '^/app/supabase/ClienteSupabase'
import { IProject } from '^/app/data/Projects/ProjectsData'

import styles from './dashboard.module.css'

export default function DashboardPage() {
  const router = useRouter()
  const supabase = createClient()

  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  // Função para buscar projetos
   const fetchProjects = async () => {
      setLoading(true)
      setError(null)
      try {
         const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('order', { ascending: true }) // Ordena pela coluna 'order'

         if (error) throw error
         if (data) setProjects(data as IProject[])

      } catch (err: any) {
         setError('Falha ao carregar projetos')
         console.error(err)
      } finally {
         setLoading(false)
      }
   }

  // Busca projetos ao carregar e pega o email do usuário
   useEffect(() => {
      const getUserAndProjects = async () => {
         const { data: { user } } = await supabase.auth.getUser()

         if (user) {
            setUserEmail(user.email ?? null)
            await fetchProjects() // Busca projetos APÓS confirmar que o user existe
         } else {
            // Teoricamente o middleware já redirecionou, mas por segurança:
            router.push('/admin/login')
         }
      }
      getUserAndProjects()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []) // Executa uma vez

   const handleLogout = async () => {
      await supabase.auth.signOut()
      router.refresh() // Força refresh para o middleware redirecionar
      // router.push('/admin/login')
   }

  // --- LÓGICA DE REORDENAÇÃO ---
   const handleMove = async (index: number, direction: 'up' | 'down') => {
      const currentProject = projects[index]
      const swapIndex = direction === 'up' ? index - 1 : index + 1

      // Verifica limites
      if (swapIndex < 0 || swapIndex >= projects.length) {
         return
      }

      const swapProject = projects[swapIndex]

      // Troca as ordens
      const currentOrder = currentProject.order
      const swapOrder = swapProject.order

      try {
         // Atualiza no Supabase em paralelo
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

         const newProjects = [...projects]
         newProjects[index] = { ...currentProject, order: swapOrder }
         newProjects[swapIndex] = { ...swapProject, order: currentOrder }

         newProjects.sort((a, b) => a.order - b.order)
         setProjects(newProjects)

      } catch (err: any) {
         setError('Falha ao reordenar projeto')
         console.error(err)
         await fetchProjects()
      }
   }

   return (
      <div className={styles.dashboardContainer}>
         <header className={styles.header}>
            <h1>Dashboard de Projetos</h1>
            <div>
               {userEmail && <span className={styles.userEmail}>{userEmail}</span>}
               <button onClick={handleLogout} className={styles.logoutButton}>Sair</button>
            </div>
         </header>

         <div className={styles.controls}>
            <Link href="/admin/add-project" className={styles.addButton}>
               <FaPlus /> Adicionar Projeto
            </Link>
         </div>

         {loading && <p>Carregando projetos...</p>}
         {error && <p className={styles.errorText}>{error}</p>}

         {!loading && !error && (
            <ul className={styles.projectList}>
               {projects.map((project, index) => (
                  <li key={project.id} className={styles.projectItem}>
                     <span>{project.title} (Ordem: {project.order})</span>

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
                        {/* Adicionar botões Editar/Excluir aqui depois */}
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   )
}