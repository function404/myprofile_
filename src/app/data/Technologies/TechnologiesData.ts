import { IconType } from 'react-icons'
import {
   SiCss3, SiJavascript, SiTypescript, SiReact, SiPhp, SiNextdotjs,
   SiAndroidstudio, SiNetlify, SiVisualstudiocode, SiPowershell,
   SiMicrosoftazure, SiSentry, SiCplusplus, SiStyledcomponents, SiExpo,
   SiHtml5
} from 'react-icons/si'
import { FaJava, FaNpm, FaYarn, FaGithub, FaNodeJs } from 'react-icons/fa'
import { ITechnology } from './TechnologiesData.types'


const iconMap: { [key: string]: IconType } = {
   SiCss3, SiJavascript, SiTypescript, SiReact, SiPhp, SiNextdotjs,
   SiAndroidstudio, SiNetlify, SiVisualstudiocode, SiPowershell,
   SiMicrosoftazure, SiSentry, SiCplusplus, FaJava, FaNpm, FaYarn,
   FaGithub, FaNodeJs, SiStyledcomponents, SiExpo
}

export const getIconComponent = (iconName: string): IconType => {
   return iconMap[iconName] || SiReact
}

export const allTechnologies: ITechnology[] = [
   {
      id: 'javascript',
      name: 'JavaScript',
      icon: SiJavascript,
      iconName: 'SiJavascript',
      category: 'Language',
      tooltipId: 'skill-js',
      formValue: 'JavaScript,SiJavascript',
      selectable: true
   },
   {
      id: 'typescript',
      name: 'TypeScript',
      icon: SiTypescript,
      iconName: 'SiTypescript',
      category: 'Language',
      tooltipId: 'skill-ts',
      formValue: 'TypeScript,SiTypescript',
      selectable: true
   },
   {
      id: 'java',
      name: 'Java',
      icon: FaJava,
      iconName: 'FaJava',
      category: 'Language',
      tooltipId: 'skill-java',
      formValue: 'Java,FaJava',
      selectable: false
   },
   {
      id: 'cplusplus',
      name: 'C++',
      icon: SiCplusplus,
      iconName: 'SiCplusplus',
      category: 'Language',
      tooltipId: 'skill-cpp',
      formValue: 'C++,SiCplusplus',
      selectable: false
   },
   {
      id: 'php',
      name: 'PHP',
      icon: SiPhp,
      iconName: 'SiPhp',
      category: 'Language',
      tooltipId: 'skill-php',
      formValue: 'PHP,SiPhp',
      selectable: true
   },
   
   // Technologies
   {
      id: 'html5',
      name: 'HTML5',
      icon: SiHtml5,
      iconName: 'SiHtml5',
      category: 'Technology',
      tooltipId: 'skill-html',
      formValue: 'HTML5,SiHtml5',
      selectable: true
   },
   {
      id: 'css3',
      name: 'CSS3',
      icon: SiCss3,
      iconName: 'SiCss3',
      category: 'Technology',
      tooltipId: 'skill-css',
      formValue: 'CSS3,SiCss3',
      selectable: true
   },
   {
      id: 'react',
      name: 'ReactJS',
      icon: SiReact,
      iconName: 'SiReact',
      category: 'Technology',
      tooltipId: 'skill-react',
      formValue: 'React,SiReact',
      selectable: true
   },
   {
      id: 'reactnative',
      name: 'React Native',
      icon: SiReact,
      iconName: 'SiReact',
      category: 'Technology',
      tooltipId: 'skill-rn',
      formValue: 'React Native,SiReact',
      selectable: true
   },
   {
      id: 'nodejs',
      name: 'NodeJS',
      icon: FaNodeJs,
      iconName: 'FaNodeJs',
      category: 'Technology',
      tooltipId: 'skill-node',
      formValue: 'Node.js,FaNodeJs',
      selectable: true
   },
   {
      id: 'nextjs',
      name: 'NextJS',
      icon: SiNextdotjs,
      iconName: 'SiNextdotjs',
      category: 'Technology',
      tooltipId: 'skill-next',
      formValue: 'Next.js,SiNextdotjs',
      selectable: true
   },
   {
      id: 'expo',
      name: 'Expo Go',
      icon: SiExpo,
      iconName: 'SiExpo',
      category: 'Technology',
      tooltipId: 'skill-expo',
      formValue: 'Expo,SiExpo',
      selectable: true
   },
   {
      id: 'styledcomponents',
      name: 'Styled Components',
      icon: SiStyledcomponents,
      iconName: 'SiStyledcomponents',
      category: 'Technology',
      tooltipId: 'skill-styled',
      formValue: 'Styled Components,SiStyledcomponents',
      selectable: true
   },
   {
      id: 'npm',
      name: 'NPM',
      icon: FaNpm,
      iconName: 'FaNpm',
      category: 'Technology',
      tooltipId: 'skill-npm',
      formValue: 'NPM,FaNpm',
      selectable: true
   },
   {
      id: 'yarn',
      name: 'Yarn',
      icon: FaYarn,
      iconName: 'FaYarn',
      category: 'Technology',
      tooltipId: 'skill-yarn',
      formValue: 'Yarn,FaYarn',
      selectable: true
   },
   {
      id: 'github',
      name: 'GitHub',
      icon: FaGithub,
      iconName: 'FaGithub',
      category: 'Technology',
      tooltipId: 'skill-github',
      formValue: 'GitHub,FaGithub',
      selectable: true
   },
   {
      id: 'netlify',
      name: 'Netlify',
      icon: SiNetlify,
      iconName: 'SiNetlify',
      category: 'Technology',
      tooltipId: 'skill-netlify',
      formValue: 'Netlify,SiNetlify',
      selectable: true
   },
   {
      id: 'vscode',
      name: 'VS Code',
      icon: SiVisualstudiocode,
      iconName: 'SiVisualstudiocode',
      category: 'Technology',
      tooltipId: 'skill-vscode',
      formValue: 'VS Code,SiVisualstudiocode',
      selectable: true
   },
   {
      id: 'powershell',
      name: 'PowerShell',
      icon: SiPowershell,
      iconName: 'SiPowershell',
      category: 'Technology',
      tooltipId: 'skill-powershell',
      formValue: 'PowerShell,SiPowershell',
      selectable: false
   },
   {
      id: 'azure',
      name: 'Azure',
      icon: SiMicrosoftazure,
      iconName: 'SiMicrosoftazure',
      category: 'Technology',
      tooltipId: 'skill-azure',
      formValue: 'Azure,SiMicrosoftazure',
      selectable: true
   },
   {
      id: 'sentry',
      name: 'Sentry',
      icon: SiSentry,
      iconName: 'SiSentry',
      category: 'Technology',
      tooltipId: 'skill-sentry',
      formValue: 'Sentry,SiSentry',
      selectable: true
   },
   {
      id: 'androidstudio',
      name: 'Android Studio',
      icon: SiAndroidstudio,
      iconName: 'SiAndroidstudio',
      category: 'Technology',
      tooltipId: 'skill-androidstudio',
      formValue: 'Android Studio,SiAndroidstudio',
      selectable: true
   },
]

export const selectableTechnologies = 
   allTechnologies.filter(tech => tech.selectable !== false)
