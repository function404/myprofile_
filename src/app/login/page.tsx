import { redirect } from 'next/navigation'
import Link from 'next/link'

import LoginForm from '^/app/container/Forms/LoginForm/LoginFormContainer'

import { createClient } from '^/app/supabase/ServerSupabase'

import titleStyles from '^/theme/Title/Title.module.css'

import styles from '^/app/login/login.module.css'

export default async function LoginPage() {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()

   if (user) redirect('/admin')

   return (
      <div className={styles.loginPageContainer}>
         <Link href="/" className={styles.backToPortfolioButton}>
            &larr; Back to Portfolio
         </Link>

         <div className={titleStyles.title}>
            <h2 data-text="Admin Login" className={titleStyles.titleH2}>
               Admin Login
            </h2>
         </div>

         <div className={styles.centerContainer}>
            <LoginForm />
         </div>
      </div>
   )
}
