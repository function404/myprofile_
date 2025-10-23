'use client'

import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { IProject } from '^/app/data/Projects/ProjectsData'

import { supabase } from '^/app/lib/SupabaseClientLib'

import { TProjectTypeFilter } from '^/app/container/Projects/ProjectsContainer.types'

export const useProjectsContainerRules = () => {
const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<TProjectTypeFilter>('web')

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          throw error
        }

        if (data) {
          setProjects(data as IProject[])
        }
      } catch (err: any) {
        console.error("Erro ao buscar projetos:", err)
        setError("Falha ao carregar projetos.")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter((project) => {
    return project.type === filter
  })

  const filterButtons: { label: string; type: TProjectTypeFilter }[] = [
     { label: 'Projetos Web', type: 'web' },
     { label: 'Projetos Mobile', type: 'mobile' },
  ]

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return {
    ref,
    mainControls,
    filter,
    setFilter,
    filteredProjects,
    filterButtons,
    loading,
    error
  }
}
