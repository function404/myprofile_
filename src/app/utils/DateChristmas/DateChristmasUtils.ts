import DateYearUtils from '^/app/utils/DateYear/DateYearUtils'

export const isChristmasSeason = (): boolean => {
  const currentDate = new Date()
  const currentYear = DateYearUtils()
  const christmasStart = new Date(currentYear, 11, 16)
  const christmasEnd = new Date(currentYear + 1, 0, 7)

  return currentDate >= christmasStart && currentDate < christmasEnd
}