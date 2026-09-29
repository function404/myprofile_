import { useEffect, useRef, useState } from 'react'
import { useAnimation, useInView } from 'framer-motion'
import { allTechnologies } from '^/app/data/Technologies/TechnologiesData'
import { TechCategory } from '^/app/data/Technologies/TechnologiesData.types'

type FilterType = 'All' | TechCategory

export const useSkillsAnimation = () => {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })
   const mainControls = useAnimation()
   const [filter, setFilter] = useState<FilterType>('All')

   useEffect(() => {
      if (isInView) {
         mainControls.start('visible')
      }
   }, [isInView, mainControls])

   const filteredSkills = allTechnologies.filter((tech) => {
      if (filter === 'All') return true
      return tech.category.includes(filter as TechCategory)
   })

   const filterOptions: { label: string; value: FilterType }[] = [
      { label: 'All', value: 'All' },
      { label: 'Front-end', value: 'Front-end' },
      { label: 'Back-end', value: 'Back-end' },
      { label: 'Tools', value: 'Tools' },
   ]

   return {
      ref,
      mainControls,
      filter,
      setFilter,
      filteredSkills,
      filterOptions
   }
}
