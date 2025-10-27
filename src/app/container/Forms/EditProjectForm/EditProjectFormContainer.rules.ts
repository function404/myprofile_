'use client'

import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import { updateProject } from "^/app/admin/admin.actions"
import { IFormState } from "^/app/admin/admin.types"

import { ITech } from "^/app/data/Projects/ProjectsData"

import { IEditProjectFormContainerProps } from '^/app/container/Forms/EditProjectForm/EditProjectFormContainer.types'

const initialState: IFormState = {
  message: '',
  type: 'idle',
}

export function useEditProjectFormContainer({ project }: IEditProjectFormContainerProps) {
   const [state, formAction] = useFormState(updateProject, initialState)
   const [currentProject, setCurrentProject] = useState(project)

   useEffect(() => {
      if (state.type === 'success') {
         // Aqui você poderia re-buscar os dados ou atualizar o estado local
         // com base no que foi enviado, mas revalidar no server action é geralmente suficiente.
         // Por simplicidade, vamos apenas mostrar a mensagem.
      }
   }, [state])

   const formatTechsForInput = (techs: ITech[] | null | undefined): string => {
      if (!techs) {
         return ''
      }
      return techs.map(t => `${t.name},${t.iconName}`).join(';')
   }

   const formatImgsForInput = (imgs: string[] | null | undefined): string => {
      if (!imgs) {
         return ''
      }
      return imgs.join(', ')
   }

   const isTechSelected = (techValue: string): boolean => {
      return (
         currentProject.techs?.some(
         (t) => `${t.name},${t.iconName}` === techValue
         ) ?? false
      )
   }

   return {
      state,
      formAction,
      currentProject,
      formatTechsForInput,
      formatImgsForInput,
      isTechSelected,
   }
}