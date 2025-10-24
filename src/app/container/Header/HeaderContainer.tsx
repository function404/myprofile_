'use client'

import React from 'react'
import Image from 'next/image'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { IconsData } from '^/app/data/Icons/IconsData'

import styles from '^/app/container/Header/HeaderContainer.module.css'

interface HeaderContainerProps {
  onImageLoad: () => void
}

export function HeaderContainer({ onImageLoad }: HeaderContainerProps) {
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
                     <p className={styles.textTwo}>Functionss</p>
                  </div>
               </div>
               <div className={styles.effectSwipe}>
                  <div className={styles.contentText}>
                     <h4 className={styles.textThree}>Dedicated to front-end mobile and web development programming</h4>
                  </div>
               </div>
               <div className={styles.contentText}>
                  <div className={styles.contentIcons}>
                     {IconsData.map(({ icon, link, text, color, hoverColor}, index) => {
                        return (
                           <a
                              key={`${index}`}
                              data-tooltip-place='bottom'
                              data-tooltip-id={`tooltip-${index}`}
                              data-tooltip-content={`${text}`}
                              href={`${link}`}
                              target='_blank'
                              style={{ color: color }}
                              className={styles.iconA}
                              onMouseOver={e => e.currentTarget.style.color = hoverColor}
                              onMouseOut={e => e.currentTarget.style.color = color}
                           >
                              {icon({size: 35})}
                           </a>
                        )
                     })}
                  </div>
               </div>
            </div>
         </div>
         <DataTooltipComponent />
      </div>
   )
}
