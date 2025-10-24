import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { createClient } from '^/app/supabase/ServerSupabase'

import styles from '^/app/login/login.module.css'

import titleStyles from '^/theme/Title/Title.module.css'

export default async function LoginPage() {
   const supabase = createClient()

   const { data: { user } } = await supabase.auth.getUser()
   if (user) {
      redirect('/admin')
   }

   const signIn = async (formData: FormData) => {
      'use server'

      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const supabase = createClient()

      const { error } = await supabase.auth.signInWithPassword({
         email,
         password,
      })

      if (error) {
         return redirect('/login?message=Falha na autenticação. Verifique suas credenciais.')
      }

      return redirect('/admin')
   }

   const searchParams = new URLSearchParams(headers().get('x-search-params') || '')
   const errorMessage = searchParams.get('message')

   return (
      <div className={styles.loginPageContainer}>
         <div className={titleStyles.title}>
            <h2 data-text="Admin Login" className={titleStyles.titleH2}>
               Admin Login
            </h2>
         </div>

         <div className={styles.centerContainer}>
            <form
               action={signIn}
               className={styles.containerForm}
            >
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

                  {errorMessage && (
                     <div className={styles.alertError}>{errorMessage}</div>
                  )}

                  <button
                     type="submit"
                     className={styles.buttonSubmit}
                  >
                     Entrar
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}