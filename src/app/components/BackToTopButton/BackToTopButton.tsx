'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import styles from './BackToTopButton.module.css'

export function BackToTopButton() {
   const [isVisible, setIsVisible] = useState(false)

   const checkScroll = () => {
      const projectsElement = document.getElementById('projects')
      let shouldShow = false

      if (projectsElement) {
         const elementTop = projectsElement.getBoundingClientRect().top
         const triggerPoint = window.innerHeight * 0.8
         shouldShow = elementTop < triggerPoint
      } else {
         shouldShow = window.scrollY > 300
      }

   
      setIsVisible(prev => {
         if (prev !== shouldShow) {
            return shouldShow
         }
         return prev
      })
   }

   useEffect(() => {   
      window.addEventListener('scroll', checkScroll)
   
      checkScroll()

      return () => {
         console.log("EFFECT CLEANUP: Removing scroll listener")
         window.removeEventListener('scroll', checkScroll)
      }
   }, [])

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.a
               href="#header"
               className={styles.backToTopButton}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.8 }}
               transition={{ duration: 0.2 }}
               aria-label="Voltar ao topo"
               title="Voltar ao topo"
               whileHover={{ scale: 1.15, y:-2 }}
               whileTap={{ scale: 0.9 }}
            >
               <FaArrowUp />
            </motion.a>
         )}
      </AnimatePresence>
   )
}