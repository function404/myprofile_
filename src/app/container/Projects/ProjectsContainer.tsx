'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { FaCircleInfo } from 'react-icons/fa6'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { useProjectsContainerRules } from '^/app/container/Projects/ProjectsContainer.rules'
import styles from './ProjectsContainer.module.css'
import titleStyles from '^/theme/Title/Title.module.css'

import { ProjectsData } from '^/app/data/Projects/ProjectsData'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const ProjectsContainer = () => {
    const {
        ref,
        mainControls
    } = useProjectsContainerRules()

  return (
    <>
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
          <div className={titleStyles.title}>
            <h2 data-text='Projects' className={titleStyles.titleH2}>Projects</h2>
          </div>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsContainerContent}>
              {ProjectsData.map((project, index) => (
                <div className={styles.projectsContainerContentCards} key={index}>
                  <div className={styles.projectsContainerContentCardsTitleProjects}>
                    <span className={styles.projectsContainerContentCardsTitleProjectsSpan}>
                      {`${project.title}`}
                    </span>
                  </div>
                  <div className={styles.projectsContainerContentCardsInfo}>
                    {`${project.description}`}
                  </div>
                  <button
                    id={`btn-${index}`}
                    data-placement='bottom'
                    className={styles.projectsContainerContentCardsButtomCards}
                  >
                    <a
                      data-tooltip-place='bottom'
                      data-tooltip-id={`tooltip-${index}`}
                      data-tooltip-content='Click on the image to view the project'
                      href={`${project.link}`}
                      {...project.target ? { target: '_blank' } : {target: ''}}
                    >
                      <Tilt
                      perspective={6000}
                      >
                        <Image
                          width={400}
                          height={250}
                          src={`${project.img}`}
                          alt='erro'
                          className={styles.projectsContainerContentCardsButtomCardsImg}
                        />
                      </Tilt>
                    </a>
                  </button>
                  <div className={styles.projectsContainerContentCardsInfoButtomCards}>
                    <FaCircleInfo /> {''}
                    Click on the image to view the project
                  </div>
                  <div className={styles.containerTechs}>
                      {project.techs && project.techs.map((tech, index) => (
                        <>
                          <Tilt
                            perspective={250}
                          >
                            <div key={index} className={styles.contentTechs}>
                              <span className={styles.iconsNameTechs}>
                                  {(tech.icon({}))} {`${tech.name}`}
                              </span>
                            </div>
                          </Tilt>
                        </>
                      ))}
                  </div>
                  <div className={styles.projectsContainerContentCardsBorderButtom}></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <DataTooltipComponent />
      </div>
    </>
  )
}
