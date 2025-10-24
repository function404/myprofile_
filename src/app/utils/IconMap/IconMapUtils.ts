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

export const getIconComponent = (iconName: string): IconType => {
   return iconMap[iconName] || SiReact
}