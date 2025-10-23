'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '^/app/supabase/ClienteSupabase'

import styles from './Login.module.css'

export default function LoginPage() {
   const router = useRouter()
   const supabase = createClient()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState<string | null>(null)
   const [loading, setLoading] = useState(false)

   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setError(null)
      setLoading(true)

      const { error } = await supabase.auth.signInWithPassword({
         email,
         password,
      })

      setLoading(false)

      if (error) {
         setError(error.message || 'Falha no login Verifique suas credenciais')
      } else {
         // Login bem-sucedido, o middleware deve redirecionar
         // Força um refresh para garantir que o middleware pegue a nova sessão
         router.refresh()
         // router.push('/admin/dashboard') // O middleware deve cuidar disso
      }
   }

   return (
      <div className={styles.loginContainer}>
         <form onSubmit={handleLogin} className={styles.loginForm}>
            <h1>Admin Login</h1>
            <div className={styles.inputGroup}>
               <label htmlFor="email">Email:</label>
               <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="seuemail@exemplo.com"
               />
            </div>

            <div className={styles.inputGroup}>
               <label htmlFor="password">Senha:</label>
               <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="******"
               />
            </div>

            {error && <p className={styles.errorText}>{error}</p>}

            <button type="submit" disabled={loading}>
               {loading ? 'Entrando...' : 'Entrar'}
            </button>
         </form>
      </div>
   )
}