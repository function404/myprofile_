'use client'

import React, { useState, useEffect, useCallback } from 'react'
import RingLoader from 'react-spinners/RingLoader'

import { SnowEffectComponent } from '^/app/components/SnowEffect/SnowEffectComponent'
import { BackToTopButton } from '^/app/components/BackToTopButton/BackToTopButton'

import { HeaderContainer } from '^/app/container/Header/HeaderContainer'
import { SkillsContainer } from '^/app/container/Skills/SkillsContainer'
import { ProjectsContainer } from '^/app/container/Projects/ProjectsContainer'
import { ContactContainer } from '^/app/container/Contact/ContactContainer'
import { FooterContainer } from '^/app/container/Footer/FooterContainer'

import './globals.css'

const TOTAL_CRITICAL_IMAGES_HEADER = 2

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true)
  const [headerImagesLoaded, setHeaderImagesLoaded] = useState(0)

  const handleHeaderImageLoad = useCallback(() => {
    setHeaderImagesLoaded((prevCount) => prevCount + 1)
  }, [])

  useEffect(() => {
    if (headerImagesLoaded >= TOTAL_CRITICAL_IMAGES_HEADER) {
      const timer = setTimeout(() => {
        setPageLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [headerImagesLoaded])

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (pageLoading) {
        console.warn('Fallback do loader da página ativado.')
        setPageLoading(false)
      }
    }, 5000)

    return () => clearTimeout(fallbackTimer)
  }, [pageLoading])

  return (
    <div className="container-index">
      {pageLoading && (
        <div className="loading">
          <RingLoader
            color={`rgb(244, 244, 244)`}
            loading={pageLoading}
            size={150}
            speedMultiplier={1.2}
          />
        </div>
      )}
      <div
        style={{
          visibility: pageLoading ? 'hidden' : 'visible',
          opacity: pageLoading ? 0 : 1,
          transition: 'visibility 0s linear 0.3s, opacity 0.3s ease-in-out',
        }}
      >
        <HeaderContainer onImageLoad={handleHeaderImageLoad} />
        <SkillsContainer />
        <ProjectsContainer />
        <ContactContainer />
        <FooterContainer />
        <SnowEffectComponent />
      </div>
      <BackToTopButton />
    </div>
  )
}