'use client';

import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

export default function Snow(){
  const [animating, setAnimating] = useState(false);

  const isHoraNatal = () => {
      const currentDate = new Date();
      const natalInicio = new Date(currentDate.getFullYear(), 11, 16);
      const natalFim = new Date(currentDate.getFullYear() + 1, 0, 7);

      return currentDate >= natalInicio && currentDate <= natalFim;
  };

  useEffect(() => {
    setAnimating(isHoraNatal());
  }, []);

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
