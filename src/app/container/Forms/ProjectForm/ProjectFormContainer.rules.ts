'use client'

import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'

import { addProject } from '^/app/admin/admin.actions'
import { IFormState } from '^/app/admin/admin.types'

const initialState: IFormState = {
  message: '',
  type: 'idle',
}

export const useProjectFormContainerRules = () => {
   const [state, formAction] = useFormState(addProject, initialState)
   const formRef = useRef<HTMLFormElement>(null)

   useEffect(() => {
      if (state.type === 'success') {
         formRef.current?.reset()
      }
   }, [state])

   return {
      formRef,
      state,
      formAction
   }
}