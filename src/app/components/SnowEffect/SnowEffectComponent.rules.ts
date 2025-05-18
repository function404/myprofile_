import { useEffect, useState } from 'react'

import DateYearUtils from '^/app/utils/DateYear/DateYearUtils'

export const SnowEffectComponentRules = () => {
  const [animating, setAnimating] = useState(false)

  const isChristmas = () => {
    const currentDate = new Date()
    const currentYear = DateYearUtils()
    const christmasStart = new Date(currentYear, 11, 16)
    const christmasEnd = new Date(currentYear + 1, 0, 7)

    return currentDate >= christmasStart && currentDate <= christmasEnd
  }

  useEffect(() => {
    setAnimating(isChristmas())
  }, [])

  return { animating }
}
