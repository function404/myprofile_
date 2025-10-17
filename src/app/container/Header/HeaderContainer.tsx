'use client'

import React from 'react'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { IconsData } from '^/app/data/Icons/IconsData'

import styles from './HeaderContainer.module.css'
import Image from 'next/image'

export const HeaderContainer = () => {
   return (
      <>
         <div id='header' className={styles.container}>
            <div className={styles.row}>
               <div className={styles.content}>
                     <div className={styles.flipContainer}>
                        <div className={styles.flipCard}>
                           <Image width={400} height={250} alt='Front profile photo' src='/meone.png' className={`${styles.img} ${styles.imgFront}`} />
                           <Image width={400} height={250} alt='Back profile photo' src='/metwo.png' className={`${styles.img} ${styles.imgBack}`} />
                        </div>
                     </div>
               </div>
               <div className={styles.content}>
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
      </>
   )
}
