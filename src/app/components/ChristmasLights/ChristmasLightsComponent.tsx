'use client'

import styles from '^/app/components/ChristmasLights/ChristmasLights.module.css'

interface IChristmasLightsProps {
  count?: number
}

export function ChristmasLightsComponent ({ count = 8 }: IChristmasLightsProps) {
   const lights = Array.from({ length: count })

   return (
      <ul className={styles.wire}>
         {lights.map((_, i) => (
            <li key={i} className={styles.light} />
         ))}
      </ul>
   )
}