'use client'

import { motion } from 'framer-motion'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'
import { IconsData } from '^/app/data/Icons/IconsData'
import DateYearUtils from '^/app/utils/DateYear/DateYearUtils'

import styles from '^/app/container/Footer/FooterContainer.module.css'
import { useFooterContainerRules } from '^/app/container/Footer/FooterContainer.rules'

export function FooterContainer() {
   const { ref, mainControls } = useFooterContainerRules()

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
         },
      },
   }

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.5 },
      },
   }

   return (
      <footer ref={ref} className={styles.containerFooter}>
         <motion.div
            className={styles.contentFooter}
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
         >
            <motion.div className={styles.socialIcons} variants={itemVariants}>
               {IconsData.map(
                  ({ icon: Icon, link, text, color, hoverColor }, index) => {
                     return (
                        <a
                           key={`footer-icon-${index}`}
                           data-tooltip-place="top"
                           data-tooltip-id={`tooltip-${index}`}
                           data-tooltip-content={`${text}`}
                           href={`${link}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{ color: color }}
                           className={styles.iconLink}
                           onMouseOver={(e) =>
                              (e.currentTarget.style.color = hoverColor)
                           }
                           onMouseOut={(e) =>
                              (e.currentTarget.style.color = color)
                           }
                           aria-label={text}
                        >
                           <Icon size={26} />
                        </a>
                     )
                  }
               )}
            </motion.div>

            <motion.div className={styles.copyrightArea} variants={itemVariants}>
               <span className={styles.signature}>Function404</span>
               <span className={styles.divider}>|</span>
               <span className={styles.copyrightText}>
                  &copy; {DateYearUtils()} Direitos reservados
               </span>
            </motion.div>
         </motion.div>
         <DataTooltipComponent />
      </footer>
   )
}
