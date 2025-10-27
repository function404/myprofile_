import { IconType } from 'react-icons'
import {
   SiStyledcomponents,
   SiTypescript,
   SiJavascript,
   SiReact,
   SiPhp,
   SiHtml5,
   SiCss3,
   SiNextdotjs,
   SiExpo,
} from 'react-icons/si'

import { ITechOption } from '^/app/data/TechOptions/TechOptionsData.types'

export const iconMap: { [key: string]: IconType } = {
   SiStyledcomponents,
   SiTypescript,
   SiJavascript,
   SiReact,
   SiPhp,
   SiHtml5,
   SiCss3,
   SiNextdotjs,
   SiExpo,
}

export const techOptions: ITechOption[] = [
  { name: 'Next.js', iconName: 'SiNextdotjs', value: 'Next.js,SiNextdotjs' },
  { name: 'React', iconName: 'SiReact', value: 'React,SiReact' },
  { name: 'TypeScript', iconName: 'SiTypescript', value: 'TypeScript,SiTypescript' },
  { name: 'JavaScript', iconName: 'SiJavascript', value: 'JavaScript,SiJavascript' },
  { name: 'HTML5', iconName: 'SiHtml5', value: 'HTML5,SiHtml5' },
  { name: 'CSS3', iconName: 'SiCss3', value: 'CSS3,SiCss3' },
  { name: 'Styled Components', iconName: 'SiStyledcomponents', value: 'Styled Components,SiStyledcomponents' },
  { name: 'PHP', iconName: 'SiPhp', value: 'PHP,SiPhp' },
  { name: 'Expo', iconName: 'SiExpo', value: 'Expo,SiExpo' },
]
