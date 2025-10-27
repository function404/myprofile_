'use client'

import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import Tilt from 'react-parallax-tilt'

import { skillsData } from '^/app/data/Skills/SkillsData'

import styles from '^/app/container/Skills/SkillsContainer.module.css'
import { useSkillsAnimation } from '^/app/container/Skills/SkillsContainer.rules'

export function SkillsContainer() {
   const { ref, mainControls } = useSkillsAnimation()

   const languages = skillsData.filter(skill => skill.category === 'Language')
   const tools = skillsData.filter(skill => skill.category === 'Technology')

   const renderSkillIcons = (skills: typeof skillsData) => (
      <div className={styles.iconGrid}>
         {skills.map(({ name, icon: Icon, tooltipId }) => (
            <Tilt perspective={50} key={tooltipId} transitionSpeed={250} gyroscope={true} scale={1.05}>
               <div
                  className={styles.iconWrapper}
                  data-tooltip-id={tooltipId}
                  data-tooltip-content={name}
                  data-tooltip-place="bottom"
               >
                  <Icon size={40} className={styles.icon} />
               </div>
            </Tilt>
         ))}
      </div>
   )

   return (
      <div id='skills' ref={ref} className={styles.sectionContainer}>
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
            <h3 className={styles.categoryTitle}>Languages</h3>
            {renderSkillIcons(languages)}

            <h3 className={styles.categoryTitle}>Tools & Technologies</h3>
            {renderSkillIcons(tools)}
         </motion.div>

         {skillsData.map(skill => (
            <Tooltip
               key={skill.tooltipId}
               id={skill.tooltipId}
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