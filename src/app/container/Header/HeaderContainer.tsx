'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { IconsData } from '^/app/data/Icons/IconsData'

import { isChristmasSeason } from '^/app/utils/DateChristmas/DateChristmasUtils'

import styles from '^/app/container/Header/HeaderContainer.module.css'
import { IHeaderContainerProps } from '^/app/container/Header/HeaderContainer.types'

export function HeaderContainer({ onImageLoad }: IHeaderContainerProps) {
   const [showScrollIndicator, setShowScrollIndicator] = useState(true)
   const [isChristmas, setIsChristmas] = useState(false)

   useEffect(() => {
      setIsChristmas(isChristmasSeason())
   }, [])

   useEffect(() => {
      const skillsSection = document.getElementById('skills')
      if (!skillsSection) {
         console.warn("Elemento #skills não encontrado para IntersectionObserver.")
         return
      }

      const observer = new IntersectionObserver(
         (entries) => {
            const [entry] = entries
            setShowScrollIndicator(!entry.isIntersecting)
         },
         {
            threshold: 0.2,
         }
      )

      observer.observe(skillsSection)

      return () => observer.disconnect()
   }, [])

   return (
      <div id='header' className={styles.containerHeader}>
         <div className={styles.contentHeader}>
            <div className={styles.boxesHeader}>
               <div className={styles.containerFlip}>
                  <div className={styles.flipCard}>
                     <Image
                        priority
                        width={400}
                        height={250}
                        alt='Front profile photo'
                        src='/meone.png'
                        className={`${styles.img} ${styles.imgFront}`}
                        onLoad={onImageLoad}
                     />
                     <Image
                        priority
                        width={400}
                        height={250}
                        alt='Back profile photo'
                        src='/metwo.png'
                        className={`${styles.img} ${styles.imgBack}`}
                        onLoad={onImageLoad}
                     />
                  </div>
               </div>
            </div>
            <div className={styles.boxesHeader}>
               <div className={styles.effectSwipe}>
                  <div className={styles.contentText}>
                     <p className={styles.textOne}>I am</p>
                  </div>
               </div>
               <div className={styles.effectSwipe}>
                  <div className={styles.contentText}>
                     <p className={styles.textTwo}>
                       {isChristmas && (
                         <motion.div
                           className={styles.santaHat}
                           initial={{ opacity: 0, y: -20, rotate: -15 }}
                           animate={{ opacity: 1, y: 0, rotate: 15 }}
                           transition={{ duration: 1, delay: 1.5 }}
                         >
                           <Image
                              priority
                              src="/gorroNoel.png"
                              alt="Santa Hat"
                              width={150}
                              height={150}
                           />
                         </motion.div>
                       )}
                       Functionss
                     </p>
                  </div>
               </div>
               <div className={styles.effectSwipe}>
                  <div className={styles.contentText}>
                     <h4 className={styles.textThree}>Dedicated to front-end mobile and web development programming</h4>
                  </div>
               </div>
               <div className={styles.contentText}>
                  <div className={styles.contentIcons}>
                     {IconsData.map(({ icon: Icon, link, text, color, hoverColor}, index) => (
                        <a key={`${index}`} data-tooltip-place='bottom' data-tooltip-id={`tooltip-${index}`}
                           data-tooltip-content={`${text}`} href={`${link}`} target='_blank'
                           style={{ color: color }} className={styles.iconA}
                           onMouseOver={e => e.currentTarget.style.color = hoverColor}
                           onMouseOut={e => e.currentTarget.style.color = color}
                        >
                           <Icon size={35}/>
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <DataTooltipComponent />

         <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0, y: 10 }}
            animate={{
               opacity: showScrollIndicator ? 1 : 0,
               y: showScrollIndicator ? 0 : 10,
            }}
            transition={{ duration: 0.4 }}
         >
            <div className={styles.scrollIndicatorInner}></div>
         </motion.div>
      </div>
   )
}
