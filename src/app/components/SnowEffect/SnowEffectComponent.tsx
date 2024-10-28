'use client';

import React from 'react';
import Snowfall from 'react-snowfall';

import { SnowEffectComponentRules } from './SnowEffectComponent.rules';

export const SnowEffectComponent = () => {
  const { animating } = SnowEffectComponentRules();

  const renderSnow = () => {
    if (animating) {
      return (
        <>
          <Snowfall
            wind={[-0, 1]}
            snowflakeCount={150}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </>
      )
    } else {
      return null;
    }
  };

  return renderSnow();
};
