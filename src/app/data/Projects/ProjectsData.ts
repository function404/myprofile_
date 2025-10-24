export interface ITech {
  name: string
  iconName: string
}

export interface IProject {
  id: number
  created_at: string
  title: string
  description: string
  img: string
  imgs: string[]
  link: string
  target: boolean
  type: 'web' | 'mobile'
  techs: ITech[] 
  order: number
}

