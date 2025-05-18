"use client"

import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const useProjectsContainerRules = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return {
    ref,
    mainControls,
  }
}
