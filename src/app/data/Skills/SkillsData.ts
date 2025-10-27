import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPhp,
  SiNextdotjs,
  SiAndroidstudio,
  SiNetlify,
  SiVisualstudiocode,
  SiPowershell,
  SiMicrosoftazure,
  SiSentry,
  SiCplusplus,
} from 'react-icons/si'
import { FaJava, FaNpm, FaYarn, FaGithub, FaNodeJs } from 'react-icons/fa'

import { ISkill } from '^/app/data/Skills/SkillsData.types'

export const skillsData: ISkill[] = [
  /**
   * Languages
  */
  {
    name: 'JavaScript',
    icon: SiJavascript,
    category: 'Language',
    tooltipId: 'skill-js'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Language',
    tooltipId: 'skill-ts'
  },
  {
    name: 'Java',
    icon: FaJava,
    category: 'Language',
    tooltipId: 'skill-java'
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    category: 'Language',
    tooltipId: 'skill-cpp'
  },
  {
    name: 'PHP',
    icon: SiPhp,
    category: 'Language',
    tooltipId: 'skill-php'
  },

  /**
   * Technologies
  */
  {
    name: 'CSS3',
    icon: SiCss3,
    category: 'Technology',
    tooltipId: 'skill-css'
  },
  {
    name: 'React',
    icon: SiReact,
    category: 'Technology',
    tooltipId: 'skill-react'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    category: 'Technology',
    tooltipId: 'skill-node'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    category: 'Technology',
    tooltipId: 'skill-next'
  },
  {
    name: 'NPM',
    icon: FaNpm,
    category: 'Technology',
    tooltipId: 'skill-npm'
  },
  {
    name: 'Yarn',
    icon: FaYarn,
    category: 'Technology',
    tooltipId: 'skill-yarn'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    category: 'Technology',
    tooltipId: 'skill-github'
  },
  {
    name: 'Netlify',
    icon: SiNetlify,
    category: 'Technology',
    tooltipId: 'skill-netlify'
  },
  {
    name: 'VS Code',
    icon: SiVisualstudiocode,
    category: 'Technology',
    tooltipId: 'skill-vscode'
  },
  {
    name: 'PowerShell',
    icon: SiPowershell,
    category: 'Technology',
    tooltipId: 'skill-powershell'
  },
  {
    name: 'Azure',
    icon: SiMicrosoftazure,
    category: 'Technology',
    tooltipId: 'skill-azure'
  },
  {
    name: 'Sentry',
    icon: SiSentry,
    category: 'Technology',
    tooltipId: 'skill-sentry'
  },
  {
    name: 'Android Studio',
    icon: SiAndroidstudio,
    category: 'Technology',
    tooltipId: 'skill-androidstudio'
  },
]