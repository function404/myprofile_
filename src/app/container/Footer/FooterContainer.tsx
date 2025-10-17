'use client'

import { motion } from 'framer-motion'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { useFooterContainerRules } from '^/app/container/Footer/FooterContainer.rules'

import { IconsData } from '^/app/data/Icons/IconsData'	

import DateYearUtils from '^/app/utils/DateYear/DateYearUtils'

import styles from './FooterContainer.module.css'

export const FooterContainer = () => {
   const {
      ref,
      mainControls,
   } = useFooterContainerRules()

   return (
      <>
         <footer className={styles.footer}>
            <div ref={ref} style={{ position: 'relative', alignItems: 'center' }}>
               <motion.div
                  variants={{
                     hidden: { opacity: 0, x: -100 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial='hidden'
                  animate={mainControls}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="main-motion"
               >
                  <div className={styles.footerMainBtn}>
                     <div className={styles.footerMainBtnContentBtn}>
                     {IconsData.map(({ icon, link, text, color, hoverColor }, index) => {
                        return (
                           <a
                           key={`${index}`}
                              data-tooltip-place='top'
                              data-tooltip-id={`tooltip-${index}`}
                              data-tooltip-content={`${text}`}
                              href={`${link}`}
                              target='_blank'
                              style={{ color: color }}
                              className={styles.iconLink}
                              onMouseOver={e => e.currentTarget.style.color = hoverColor}
                              onMouseOut={e => e.currentTarget.style.color = color}
                           >
                              {icon({size: 24})}
                           </a>
                        )})}
                     </div>
                     <h5 className={styles.footerMainBtnH5}>
                        2022 - {DateYearUtils()} &copy; Reserved rights
                     </h5>
                  </div>
               </motion.div>
               <DataTooltipComponent />
            </div>
         </footer>
      </>
   )
}
