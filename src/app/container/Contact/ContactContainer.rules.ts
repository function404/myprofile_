'use client'

import { useRef, FormEvent, useState, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'

import emailjs from '@emailjs/browser'

import DateDayUtils from '^/app/utils/DateDay/DateDayUtils'
import DateMouthUtils from '^/app/utils/DateMounth/DateMounthUtils'
import DateYearUtils from '^/app/utils/DateYear/DateYearUtils'

import { ITemplateContactProps } from '^/app/container/Contact/ContactContainer.types'

export const useContactContainerRules = () => {
    const ref = useRef(null)

    const mainControls = useAnimation()
    const isInView = useInView(ref, { once: true })

    const form = useRef<HTMLFormElement>(null)

    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleFocus = () => {
        setError(null)
        setSuccess(null)
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault()

        if (form.current) {
            const formData = new FormData(form.current)
            const userName = formData.get('user_name') as string
            const userEmail = formData.get('user_email') as string
            const message = formData.get('message') as string
            const year = DateYearUtils() as number
            const hours = `${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}h - ${DateDayUtils()}/${DateMouthUtils() + 1}/${DateYearUtils()}` as string

            if (!userName || !userEmail || !message) {
                setError('Por favor, preencha todos os campos.')
                setSuccess(null)
                return
            }

            setError(null)
            setLoading(true)

            const template: ITemplateContactProps = {
                from_name: userName,
                message: message,
                email: userEmail,
                year: year,
                hours: hours
            }

            const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
            const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
            const userID = process.env.NEXT_PUBLIC_USER_ID!;

            emailjs.send(serviceID, templateID, {...template}, userID)
            .then(
                () => {
                setSuccess('Mensagem enviada com sucesso!')
                setLoading(false)
                form.current?.reset()
                },
            )
            .catch(
                () => {
                setError('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.')
                setLoading(false)
                },
            )
        }
    }

    useEffect(() => {
        if (isInView) {
        mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return {
        ref,
        form,
        error,
        success,
        loading,
        sendEmail,
        handleFocus,
        mainControls,
    }
}