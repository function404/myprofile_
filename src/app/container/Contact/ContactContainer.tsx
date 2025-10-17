'use client'

import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { motion } from 'framer-motion'

import styles from './ContactContainer.module.css'
import titleStyles from '^/theme/Title/Title.module.css'

import { StyledTitle, StyledTitleH2 } from '^/theme/Title/TitleTheme'

import { useContactContainerRules } from '^/app/container/Contact/ContactContainer.rules'
import { 
   StyledCenter,
   StyledForm,
   StyledContent,
   StyledLabel,
   StyledInput,
   StyledTextArea,
   StyledButtonSubmit,
   StyledAlertError,
   StyledAlertSuccess
} from '^/app/container/Contact/ContactContainer.styles'

import { StyledMainMotion, BorderTop, BorderBottom } from '^/app/globals'

export const ContactContainer = () => {
   const {
      ref,
      form,
      error,
      success,
      loading,
      sendEmail,
      handleFocus,
      mainControls,
   } = useContactContainerRules()

  return (
   <>
      <div ref={ref} style={{ position: 'relative', alignItems: 'center' }}>
         <motion.div
            variants={{
               hidden: { opacity: 0, x: 100 },
               visible: { opacity: 1, x: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 2, delay: 0.5 }}
            className="main-motion"
         >
            <div className={titleStyles.title}>
               <h2 data-text='Contact' className={titleStyles.titleH2}>Contact</h2>
            </div>
            <div className={styles.center}>
               <form ref={form} onSubmit={sendEmail} className={styles.form}>
                  <div className="border-top"></div>
                     <div className={styles.content}>
                        <label className={styles.label}>Name:</label>
                        <input type='text' name='user_name' onFocus={handleFocus} className={styles.input} />
                        <label className={styles.label}>Email:</label>
                        <input type='email' name='user_email' onFocus={handleFocus} className={styles.input} />
                        <label className={styles.label}>Message:</label>
                        <textarea name='message' onFocus={handleFocus} className={styles.textarea} />
                        {error && <div className={styles.alertError}>{error}</div>}
                        {success && <div className={styles.alertSuccess}>{success}</div>}
                        <div className={styles.center}>
                           <button type='submit' disabled={loading} className={styles.buttonSubmit}>
                              {loading ? (
                              <div className={styles.center}>
                                 <RingLoader color={'rgb(255, 255, 255)'} loading={loading} size={24} />
                              </div>
                              ) : (
                                 'Send'
                              )}
                           </button>
                        </div>
                     </div>
                  <div className="border-bottom"></div>
               </form>
            </div>
         </motion.div>
      </div>
   </>
  )
}
