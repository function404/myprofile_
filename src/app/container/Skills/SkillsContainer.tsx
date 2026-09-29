'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import Tilt from 'react-parallax-tilt'

import { allTechnologies } from '^/app/data/Technologies/TechnologiesData'
import titleStyles from '^/theme/Title/Title.module.css'
import styles from '^/app/container/Skills/SkillsContainer.module.css'
import { useSkillsAnimation } from '^/app/container/Skills/SkillsContainer.rules'

export function SkillsContainer() {
   const { ref, mainControls, filter, setFilter, filteredSkills, filterOptions } = useSkillsAnimation()

   return (
      <div id='skills' ref={ref} className={styles.sectionContainer}>
         <motion.div
            variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.2 }}
         >
            <div className={titleStyles.title}>
               <h2 
                  data-text="Stack" 
                  className={titleStyles.titleH2}
                  style={{ 
                     '--glitch-font-size': '50px',
                     '--glitch-font-size-mobile': '34px',
                     '--glitch-margin-bottom': '40px',
                     '--glitch-letter-spacing': '2px'
                  } as React.CSSProperties}
               >
                  Stack
               </h2>
            </div>

            <div className={styles.filterContainer}>
               {filterOptions.map(({ label, value }) => (
                  <button
                     key={value}
                     onClick={() => setFilter(value)}
                     className={`${styles.filterButton} ${filter === value ? styles.active : ''}`}
                  >
                     {label}
                  </button>
               ))}
            </div>

            <div className={styles.bentoCard}>
               <div className={styles.iconGrid}>
                  <AnimatePresence>
                     {filteredSkills.map(({ name, icon: Icon, tooltipId, id, color }) => (
                        <motion.div
                           key={id}
                           layout
                           initial={{ opacity: 0, scale: 0.5 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.5 }}
                           transition={{ duration: 0.3 }}
                        >
                           <Tilt
                              perspective={300}
                              scale={1.15}
                              transitionSpeed={400}
                              gyroscope={true}
                           >
                              <div
                                 className={styles.iconWrapper}
                                 data-tooltip-id={tooltipId}
                                 data-tooltip-content={name}
                                 data-tooltip-place="bottom"
                                 style={{ '--native-color': color || '#ffffff' } as React.CSSProperties}
                              >
                                 <Icon size={45} className={styles.icon} />
                              </div>
                           </Tilt>
                        </motion.div>
                     ))}
                  </AnimatePresence>
               </div>
            </div>
         </motion.div>

         {allTechnologies.map(tech => (
            <Tooltip
               key={tech.tooltipId}
               id={tech.tooltipId}
               arrowColor={`rgb(244, 244, 244)`}
               style={{
                  backgroundColor: 'rgb(244, 244, 244)',
                  borderRadius: '8px',
                  color: 'rgb(0, 0, 0)',
                  fontSize: '14px',
                  padding: '6px 12px',
                  zIndex: 99
               }}
            />
         ))}
      </div>
   )
}
