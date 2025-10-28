import { IconType } from 'react-icons'

export interface ITechnology {
  id: string
  name: string
  icon: IconType
  iconName: string
  category: 'Language' | 'Technology'
  tooltipId: string
  formValue: string
  selectable?: boolean
}