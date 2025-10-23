'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { IProject } from '^/app/data/Projects/ProjectsData'
import { getIconComponent } from '^/app/utils/IconMap/IconMapUtils'

import { IProjectCardProps } from '^/app/components/ProjectCard/ProjectCardComponent.types'

import styles from './ProjectCardComponent.module.css'

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
   const cardClass =
      project.type === 'mobile'
         ? `${styles.card} ${styles.mobileCard}`
         : styles.card

         const imageSources = project.imgs && project.imgs.length > 1 ? project.imgs : [project.img]
   const hasCarousel = imageSources.length > 1

   const [currentImageIndex, setCurrentImageIndex] = useState(0)

   const handlePrevImage = (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrentImageIndex((prevIndex) =>
         prevIndex === 0 ? imageSources.length - 1 : prevIndex - 1
      )
   }

   const handleNextImage = (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrentImageIndex((prevIndex) =>
         prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
      )
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
            <div className={`${styles.imageContainer} ${hasCarousel ? styles.hasCarousel : ''}`}>
               <Image
                  priority
                  width={500}
                  height={project.type === 'mobile' ? 600 : 300}
                  src={imageSources[currentImageIndex]}
                  alt={`Imagem ${currentImageIndex + 1} do projeto ${project.title}`}
                  className={styles.cardImage}
                  key={imageSources[currentImageIndex]}
               />

               {hasCarousel && (
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
                  </>
               )}
            </div>

            <div className={styles.cardContent}>
               <h3 className={styles.cardTitle}>{project.title}</h3>
               <p className={styles.cardDescription}>{project.description}</p>

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