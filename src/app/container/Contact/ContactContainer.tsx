'use client'

import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import { motion } from 'framer-motion'

import titleStyles from '^/theme/Title/Title.module.css'

import styles from '^/app/container/Contact/ContactContainer.module.css'
import { useContactContainerRules } from '^/app/container/Contact/ContactContainer.rules'

export function ContactContainer() {
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
      <div ref={ref} className={styles.sectionContainer}>
         <motion.div
            variants={{
               hidden: { opacity: 0, x: 100 },
               visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2, delay: 0.5 }}
            className="main-motion"
         >
            <div className={titleStyles.title}>
               <h2 data-text="Contact" className={titleStyles.titleH2}>
                  Contact
               </h2>
            </div>

            <div className={styles.centerContainer}>
               <form
                  ref={form}
                  onSubmit={sendEmail}
                  className={styles.containerForm}
               >
                  {/* Removed <div className="border-top"/> */}
                  <div className={styles.contentForm}>
                  <label className={styles.label}>Name:</label>
                  <input
                     type="text"
                     name="user_name"
                     onFocus={handleFocus}
                     className={styles.input}
                     placeholder="Your name"
                  />

                  <label className={styles.label}>Email:</label>
                  <input
                     type="email"
                     name="user_email"
                     onFocus={handleFocus}
                     className={styles.input}
                     placeholder="email@example.com"
                  />

                  <label className={styles.label}>Message:</label>
                  <textarea
                     name="message"
                     onFocus={handleFocus}
                     className={styles.textarea}
                     placeholder="Your message here..."
                     rows={5}
                  />

                  {error && <div className={styles.alertError}>{error}</div>}
                  {success && <div className={styles.alertSuccess}>{success}</div>}

                  {/* Removed extra centerContainer div around button */}
                  <button
                     type="submit"
                     disabled={loading}
                     className={styles.buttonSubmit}
                  >
                     {loading ? (
                        <RingLoader
                        color={'rgb(23, 23, 23)'} 
                        loading={loading}
                        size={20}
                        />
                     ) : (
                        'Send'
                     )}
                  </button>
                  </div>
                  {/* Removed <div className="border-bottom"/> */}
               </form>
            </div>
         </motion.div>
      </div>
   )
}
