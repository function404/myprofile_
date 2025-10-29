'use client'

import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

import { updateProject } from '^/app/admin/admin.actions'
import { IFormState } from '^/app/admin/admin.types'

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
         setCurrentProject((prev) => ({
            ...prev,
            ...project,
         }))
         console.log('Project updated successfully!')
      }
   }, [state, project])

   const checkSelected = (techValue: string): boolean => {
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
      checkSelected,
   }
}