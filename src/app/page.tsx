'use client'

import React, { useState, useEffect, useCallback} from 'react'
import RingLoader from 'react-spinners/RingLoader'

import { SnowEffectComponent } from '^/app/components/SnowEffect/SnowEffectComponent'

import { HeaderContainer } from '^/app/container/Header/HeaderContainer'
import { ProjectsContainer } from '^/app/container/Projects/ProjectsContainer'
import { ContactContainer } from '^/app/container/Contact/ContactContainer'
import { FooterContainer } from '^/app/container/Footer/FooterContainer'
import { ProjectsData } from '^/app/data/Projects/ProjectsData'

import './globals.css'

const TOTAL_CRITICAL_IMAGES = 2 + ProjectsData.length

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prevCount) => prevCount + 1)
  }, [])

  useEffect(() => {
    if (imagesLoaded >= TOTAL_CRITICAL_IMAGES) {
      const timer = setTimeout(() => {
         setLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (loading) {
        console.warn("Loading fallback triggered. Some images might not have loaded.")
        setLoading(false)
      }
    }, 10000)

    return () => clearTimeout(fallbackTimer)
  }, [loading])

  return (
    <>
      <div className="container-index">
        {loading && (
          <div className="loading">
            <RingLoader color={`rgb(244, 244, 244)`} loading={loading} size={150} speedMultiplier={1.2}/>
          </div>
        )}
        <div style={{ visibility: loading ? 'hidden' : 'visible', opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
          <HeaderContainer onImageLoad={handleImageLoad} />
          <ProjectsContainer onImageLoad={handleImageLoad} />
          <ContactContainer />
          <FooterContainer />
          <SnowEffectComponent />
        </div>
      </div>
    </>
  )
}
