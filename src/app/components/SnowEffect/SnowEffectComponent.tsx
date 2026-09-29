'use client'

import React from 'react'
import Snowfall from 'react-snowfall'

import { SnowEffectComponentRules } from '^/app/components/SnowEffect/SnowEffectComponent.rules'

export const SnowEffectComponent = () => {
  const { animating } = SnowEffectComponentRules()

  const renderSnow = () => {
    if (animating) {
      return (
        <Snowfall
          wind={[-0.2, 0.5]}
          snowflakeCount={100}
          color="rgba(220, 235, 255, 0.7)"
          radius={[0.5, 2.5]}
          speed={[0.2, 1.5]}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 90,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 4px rgba(200,220,255,0.4))'
          }}
        />
      )
    } else {
      return null
    }
  }

  return renderSnow()
}
