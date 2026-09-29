'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import { createClient } from '^/app/supabase/ClientSupabase'

import styles from '^/app/container/Forms/LoginForm/LoginFormContainer.module.css'

export default function LoginForm() {
  const router = useRouter()
  const supabase = createClient()

  const [error, setError] = useState<{ message: string, field?: 'email' | 'password' } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { data: adminUser } = await supabase
        .from('admins')
        .select('email')
        .eq('email', email)
        .maybeSingle()

    if (!adminUser) {
      setError({ message: 'Email não cadastrado.', field: 'email' })
      setLoading(false)
      return
    }

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)

    if (authError) {
      if (authError.message === 'Invalid login credentials') {
        setError({ message: 'Senha incorreta.', field: 'password' })
      } else {
        setError({ message: 'Ocorreu um erro ao tentar fazer login. Tente novamente.', field: 'password' })
      }
      return
    }

    router.push('/admin')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.containerForm}>
      <div className={styles.contentForm}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          className={`${styles.input} ${error?.field === 'email' ? styles.inputError : ''}`}
          placeholder="Seu email de admin"
          required
        />

        <label className={styles.label}>Senha:</label>
        <input
          type="password"
          name="password"
          className={`${styles.input} ${error?.field === 'password' ? styles.inputError : ''}`}
          placeholder="••••••••"
          required
        />

        {error && <div className={styles.alertError}>{error.message}</div>}

        <button
          type="submit"
          className={styles.buttonSubmit}
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </form>
  )
}
