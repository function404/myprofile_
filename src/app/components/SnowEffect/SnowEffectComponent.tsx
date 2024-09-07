'use client';

import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

import DateYearUtils from '^/app/utils/DateYear/DateYearUtils';

export default function SnowEffectComponent(){
  const [animating, setAnimating] = useState(false);

  const isChristmas = () => {
      const currentDate = new Date();
      const currentYear = DateYearUtils();
      const christmasStart = new Date(currentYear, 11, 16);
      const christmasEnd = new Date(currentYear + 1, 0, 7);

      return currentDate >= christmasStart && currentDate <= christmasEnd;
  };

  useEffect(() => {
    setAnimating(isChristmas());
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
