'use client'

import React from 'react'
import Snowfall from 'react-snowfall'

import { SnowEffectComponentRules } from '^/app/components/SnowEffect/SnowEffectComponent.rules'

export const SnowEffectComponent = () => {
  const { animating } = SnowEffectComponentRules()

  const renderSnow = () => {
    if (animating) {
      return (
        <>
          <Snowfall
            wind={[-0.5, 1]}
            snowflakeCount={150}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 50,
              pointerEvents: 'none'
            }}
          />
        </>
      )
    } else {
      return null
    }
  }

  return renderSnow()
}
