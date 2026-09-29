import { IconType } from 'react-icons'

export type TechCategory = 'Front-end' | 'Back-end' | 'Tools'

export interface ITechnology {
  id: string
  name: string
  icon: IconType
  iconName: string
  category: TechCategory[]
  color?: string
  tooltipId: string
  formValue: string
  selectable?: boolean
}
