import { IconType } from 'react-icons'

export interface ISkill {
   name: string
   icon: IconType
   category: 'Language' | 'Technology'
   tooltipId: string
}