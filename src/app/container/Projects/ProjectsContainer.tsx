'use client'

import React from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { FaCircleInfo } from 'react-icons/fa6'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { useProjectsContainerRules } from '^/app/container/Projects/ProjectsContainer.rules'
import styles from './ProjectsContainer.module.css'
import titleStyles from '^/theme/Title/Title.module.css'

import { ProjectsData } from '^/app/data/Projects/ProjectsData'
interface ProjectsContainerProps {
  onImageLoad: () => void
}

export function ProjectsContainer({ onImageLoad }: ProjectsContainerProps) {
    const {
        ref,
        mainControls
    } = useProjectsContainerRules()

  return (
    <div ref={ref} className={styles.sectionContainer}>
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

        <div className={styles.containerProjects}>
          <div className={styles.contentProjects}>
            {ProjectsData.map((project, index) => (
              <div className={styles.cardsProjects} key={`project-${index}`}>
                <div className={styles.cardsTitleProjects}>
                  <span className={styles.CardsTitleSpanProjects}>
                    {`${project.title}`}
                  </span>
                </div>

                <div className={styles.cardsInfoProjects}>
                  {`${project.description}`}
                </div>

                <button
                  id={`btn-${index}`}
                  data-placement='bottom'
                  className={styles.cardsButtomProjects}
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
                        priority
                        width={400}
                        height={250}
                        src={`${project.img}`}
                        alt={`Erro project image: ${project.title}`}
                        className={styles.cardsImgProjects}
                        onLoad={onImageLoad}
                      />
                    </Tilt>
                  </a>
                </button>

                <div className={styles.cardsInfoButtomProjects}>
                  <FaCircleInfo />
                  Click on the image to view the project
                </div>

                <div className={styles.cardsTechs}>
                    {project.techs && project.techs.map((tech, techIndex) => (
                      <Tilt
                        key={`tech-${index}-${techIndex}`}
                        perspective={250}
                      >
                        <div className={styles.cardsTechsContent}>
                           <span className={styles.iconsNameTechs}>
                               {(tech.icon({}))} {`${tech.name}`}
                           </span>
                        </div>
                      </Tilt>
                    ))}
                </div>
                <div className="border-bottom"></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <DataTooltipComponent />
    </div>
  )
}
