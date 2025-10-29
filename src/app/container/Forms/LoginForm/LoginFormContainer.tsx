'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import { createClient } from '^/app/supabase/ClientSupabase'

import styles from '^/app/container/Forms/LoginForm/LoginFormContainer.module.css'

export default function LoginForm() {
    const router = useRouter()
    const supabase = createClient()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setError(null)
      setLoading(true)

      const formData = new FormData(e.currentTarget)
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      const { error } = await supabase.auth.signInWithPassword({ email, password })
      setLoading(false)

      if (error) {
        setError('Falha na autenticação. Verifique suas credenciais.')
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
            className={styles.input}
            placeholder="admin@email.com"
            required
          />

          <label className={styles.label}>Senha:</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="••••••••"
            required
          />

          {error && <div className={styles.alertError}>{error}</div>}

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
