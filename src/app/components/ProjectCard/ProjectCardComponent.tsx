'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { motion, AnimatePresence } from 'framer-motion'
import {
   FaGithub,
   FaExternalLinkAlt,
   FaChevronLeft,
   FaChevronRight
} from 'react-icons/fa'

import { IProject } from '^/app/data/Projects/ProjectsData'
import { getIconComponent } from '^/app/data/Technologies/TechnologiesData'

import { IProjectCardProps } from '^/app/components/ProjectCard/ProjectCardComponent.types'
import styles from '^/app/components/ProjectCard/ProjectCardComponent.module.css'

const getLinkButtons = (project: IProject) => {
   const isGithubLink = project.link.includes('github.com')
   const isInternalLink = project.link.startsWith('#')

   if (isInternalLink) {
      return (
         <a href={project.link} className={styles.button}>
            <FaExternalLinkAlt /> View Project
         </a>
      )
   }

   if (isGithubLink) {
      return (
         <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
         >
            <FaGithub /> View code
         </a>
      )
   }

   return (
      <a
         href={project.link}
         target="_blank"
         rel="noopener noreferrer"
         className={styles.button}
      >
         <FaExternalLinkAlt /> View Project
      </a>
   )
}

export function ProjectCard({ project }: IProjectCardProps) {
   const [isScreenOn, setIsScreenOn] = useState(true)

   const cardClass =
      project.type === 'mobile'
         ? `${styles.card} ${styles.mobileCard}`
         : styles.card

   const allImageSources: string[] = []

   if (project.img && project.img.trim() !== '') {
      allImageSources.push(project.img)
   }

   if (project.imgs && project.imgs.length > 0) {
      allImageSources.push(...project.imgs
         .filter(imgUrl => imgUrl && imgUrl.trim() !== ''))
   }

   const [currentImageIndex, setCurrentImageIndex] = useState(0)
   const imageSources = allImageSources
   const hasImages = imageSources.length > 0
   const hasCarousel = imageSources.length > 1

  
   const paginate = (newDirection: number) => {
      if (!hasCarousel || !isScreenOn) return
      
      let newIndex = currentImageIndex + newDirection
      if (newIndex < 0) {
         newIndex = imageSources.length - 1
      } else if (newIndex >= imageSources.length) {
         newIndex = 0
      }
      setCurrentImageIndex(newIndex)
   }

   const handlePrevImage = (e: React.MouseEvent) => {
      e.stopPropagation()
      paginate(-1)
   }

   const handleNextImage = (e: React.MouseEvent) => {
      e.stopPropagation()
      paginate(1)
   }

   const onDragEnd = (
      e: any,
      { offset, velocity }: {
         offset: { x: number; y: number };
         velocity: { x: number; y: number }
      }
   ) => {
      if (!hasCarousel || !isScreenOn) return

      const swipeThreshold = 50
      const velocityThreshold = 200

      if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
         paginate(1)
      } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
         paginate(-1)
      }
   }
   
   const handlePowerButtonClick = (e: React.MouseEvent) => {
      e.stopPropagation()
      setIsScreenOn(prevState => !prevState)
   }

   return (
      <motion.div
         layout
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.95 }}
         transition={{ duration: 0.3, ease: 'easeOut' }}
         className={styles.cardWrapper}
      >
         <div className={cardClass}>
            {project.type === 'mobile' && (
               <button
                  className={styles.powerButton}
                  onClick={handlePowerButtonClick}
                  aria-label="Ligar/Desligar tela"
               />
            )}

            {hasImages && (
               <div
                  className={`
                     ${styles.imageContainer}
                     ${hasCarousel ? styles.hasCarousel : ''}
                  `}
                  >
                  <AnimatePresence initial={false}>
                     <motion.div
                        key={currentImageIndex}
                        className={styles.motionImageWrapper}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={onDragEnd}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                     >
                        <Image
                           priority
                           width={600}
                           height={project.type === 'mobile' ? 600 : 300}
                           src={imageSources[currentImageIndex]}
                           alt={`Imagem 
                              ${currentImageIndex + 1} do projeto 
                              ${project.title}`
                           }
                           className={`${styles.cardImage} ${
                              !isScreenOn ? styles.screenOff : ''
                           }`}
                        />
                     </motion.div>
                  </AnimatePresence>

                  {hasCarousel && isScreenOn && (
                     <>
                        <button
                           className={`${styles.carouselButton} ${styles.prevButton}`}
                           onClick={handlePrevImage}
                           aria-label="Imagem anterior"
                        >
                           <FaChevronLeft />
                        </button>
                        <button
                           className={`${styles.carouselButton} ${styles.nextButton}`}
                           onClick={handleNextImage}
                           aria-label="Próxima imagem"
                        >
                           <FaChevronRight />
                        </button>

                        <div className={styles.paginationDots}>
                           {imageSources.map((_, index) => (
                              <button
                                 key={index}
                                 className={`${styles.dot} ${
                                    index === currentImageIndex ? styles.dotActive : ''
                                 }`}
                                 onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentImageIndex(index)
                                 }}
                                 aria-label={`Ir para imagem ${index + 1}`}
                              />
                           ))}
                        </div>
                     </>
                  )}
               </div>
            )}

            <div className={styles.cardContent}>
               <h3 className={styles.cardTitle}>{project.title}</h3>
               <p className={styles.cardDescription}>
                  <i>{project.description}</i>
               </p>

               <div className={styles.techList}>
               {project.techs?.map((tech, index) => {
                  const IconComponent = getIconComponent(tech.iconName)
                  return (
                     <Tilt
                        key={index}
                        perspective={6000}
                        scale={1.05}
                        transitionSpeed={250}
                        gyroscope={true}
                     >
                        <span className={styles.techTag}>
                           {IconComponent && (
                              <IconComponent size={14} />
                           )}
                           {tech.name}
                        </span>
                     </Tilt>
                  )
               })}
            </div>

               <div className={styles.buttonGroup}>
                  {getLinkButtons(project)}
               </div>
            </div>
         </div>
      </motion.div>
   )
}