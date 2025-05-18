'use client'

import React, { useState, useEffect} from 'react'

import RingLoader from 'react-spinners/RingLoader'

import { SnowEffectComponent } from '^/app/components/SnowEffect/SnowEffectComponent'

import { HeaderContainer } from '^/app/container/Header/HeaderContainer'
import { ProjectsContainer } from '^/app/container/Projects/ProjectsContainer'
import { ContactContainer } from '^/app/container/Contact/ContactContainer'
import { FooterContainer } from '^/app/container/Footer/FooterContainer'

import { colors } from '^/theme/Colors/Colors'

import {
  GlobalStyles,
  StyledContainerIndex,
  StyledLoading
} from '^/app/globals'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const randomTimeout = Math.floor(Math.random() * 4 + 2) * 1000
    const timer = setTimeout(() => {
      setLoading(false)
    }, randomTimeout)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <StyledContainerIndex>
        {loading ? ( 
        <StyledLoading>
          <RingLoader color={`${colors.colorPrimary}`} loading={loading} size={150} speedMultiplier={1.2}/>
        </StyledLoading>
       ) : (
        <>
          <HeaderContainer />
          <ProjectsContainer />
          <ContactContainer />
          <FooterContainer />
          <SnowEffectComponent />
        </>  
      )}
      </StyledContainerIndex>
      <GlobalStyles />
    </>
  )
}
