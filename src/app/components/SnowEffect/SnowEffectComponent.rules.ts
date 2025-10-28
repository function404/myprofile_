import { useEffect, useState } from 'react'

import { isChristmasSeason } from '^/app/utils/DateChristmas/DateChristmasUtils'

export const SnowEffectComponentRules = () => {
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setAnimating(isChristmasSeason())
  }, [])

  return { animating }
}
