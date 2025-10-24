'use client'

import { useFormStatus } from 'react-dom'
import RingLoader from 'react-spinners/RingLoader'

import { ISubmitButtonProps } from '^/app/components/SubmitButton/SubmitButtonComponent.types'
import styles from '^/app/components/SubmitButton/SubmitButtonComponent.module.css'

export function SubmitButtonComponent({ pendingText = "Sending...", defaultText = "Send"}: ISubmitButtonProps) {
   const { pending } = useFormStatus()

   return (
      <button
         type="submit"
         disabled={pending}
         className={styles.buttonSubmit}
      >
         {pending ? (
            <>
               <RingLoader color={'rgb(23, 23, 23)'} loading={pending} size={20} />
               <span style={{ marginLeft: '8px' }}>{pendingText}</span>
            </>
         ) : (
            defaultText
         )}
      </button>
   )
}