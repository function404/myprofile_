import { IconType } from 'react-icons'
import {
   SiCss3, SiJavascript, SiTypescript, SiReact, SiPhp, SiNextdotjs,
   SiAndroidstudio, SiNetlify, SiVisualstudiocode, SiPowershell,
   SiMicrosoftazure, SiCplusplus, SiStyledcomponents, SiExpo,
   SiHtml5, SiTailwindcss, SiFirebase, SiXcode, SiGraphql
} from 'react-icons/si'
import { FaJava, FaNpm, FaYarn, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'

import { ITechnology } from '^/app/data/Technologies/TechnologiesData.types'

const iconMap: { [key: string]: IconType } = {
   SiCss3, SiJavascript, SiTypescript, SiReact, SiPhp, SiNextdotjs,
   SiAndroidstudio, SiNetlify, SiVisualstudiocode, SiPowershell,
   SiMicrosoftazure, SiCplusplus, FaJava, FaNpm, FaYarn,
   FaGithub, FaNodeJs, SiStyledcomponents, SiExpo, SiTailwindcss,
   TbBrandReactNative, SiFirebase, SiXcode, SiGraphql, FaReact
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
      category: ['Front-end', 'Back-end'],
      color: '#F7DF1E',
      tooltipId: 'skill-js',
      formValue: 'JavaScript,SiJavascript',
      selectable: true
   },
   {
      id: 'typescript',
      name: 'TypeScript',
      icon: SiTypescript,
      iconName: 'SiTypescript',
      category: ['Front-end', 'Back-end'],
      color: '#3178C6',
      tooltipId: 'skill-ts',
      formValue: 'TypeScript,SiTypescript',
      selectable: true
   },
   {
      id: 'java',
      name: 'Java',
      icon: FaJava,
      iconName: 'FaJava',
      category: ['Back-end'],
      color: '#007396',
      tooltipId: 'skill-java',
      formValue: 'Java,FaJava',
      selectable: false
   },
   {
      id: 'cplusplus',
      name: 'C++',
      icon: SiCplusplus,
      iconName: 'SiCplusplus',
      category: ['Back-end'],
      color: '#00599C',
      tooltipId: 'skill-cpp',
      formValue: 'C++,SiCplusplus',
      selectable: false
   },
   {
      id: 'php',
      name: 'PHP',
      icon: SiPhp,
      iconName: 'SiPhp',
      category: ['Back-end'],
      color: '#777BB4',
      tooltipId: 'skill-php',
      formValue: 'PHP,SiPhp',
      selectable: true
   },
   {
      id: 'nodejs',
      name: 'NodeJS',
      icon: FaNodeJs,
      iconName: 'FaNodeJs',
      category: ['Back-end'],
      color: '#339933',
      tooltipId: 'skill-node',
      formValue: 'Node.js,FaNodeJs',
      selectable: true
   },
   {
      id: 'firebase',
      name: 'Firebase',
      icon: SiFirebase,
      iconName: 'SiFirebase',
      category: ['Back-end', 'Tools'],
      color: '#FFCA28',
      tooltipId: 'skill-firebase',
      formValue: 'Firebase,SiFirebase',
      selectable: true
   },
   {
      id: 'graphql',
      name: 'Altair GraphQL',
      icon: SiGraphql,
      iconName: 'SiGraphql',
      category: ['Tools', 'Back-end'],
      color: '#06B6D4',
      tooltipId: 'skill-graphql',
      formValue: 'Altair GraphQL Client,SiGraphql',
      selectable: true
   },
   {
      id: 'html5',
      name: 'HTML5',
      icon: SiHtml5,
      iconName: 'SiHtml5',
      category: ['Front-end'],
      color: '#E34F26',
      tooltipId: 'skill-html',
      formValue: 'HTML5,SiHtml5',
      selectable: true
   },
   {
      id: 'css3',
      name: 'CSS3',
      icon: SiCss3,
      iconName: 'SiCss3',
      category: ['Front-end'],
      color: '#1572B6',
      tooltipId: 'skill-css',
      formValue: 'CSS3,SiCss3',
      selectable: true
   },
   {
      id: 'react',
      name: 'ReactJS',
      icon: SiReact,
      iconName: 'SiReact',
      category: ['Front-end'],
      color: '#61DAFB',
      tooltipId: 'skill-react',
      formValue: 'React,SiReact',
      selectable: true
   },
   {
      id: 'reactnative',
      name: 'React Native',
      icon: TbBrandReactNative,
      iconName: 'TbBrandReactNative',
      category: ['Front-end'],
      color: '#61DAFB',
      tooltipId: 'skill-rn',
      formValue: 'React Native,TbBrandReactNative',
      selectable: true
   },
   {
      id: 'nextjs',
      name: 'NextJS',
      icon: SiNextdotjs,
      iconName: 'SiNextdotjs',
      category: ['Front-end', 'Back-end'],
      color: '#ffffff',
      tooltipId: 'skill-next',
      formValue: 'Next.js,SiNextdotjs',
      selectable: true
   },
   {
      id: 'styledcomponents',
      name: 'Styled Components',
      icon: SiStyledcomponents,
      iconName: 'SiStyledcomponents',
      category: ['Front-end'],
      color: '#DB7093',
      tooltipId: 'skill-styled',
      formValue: 'Styled Components,SiStyledcomponents',
      selectable: true
   },
   {
      id: 'tailwindcss',
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      iconName: 'SiTailwindcss',
      category: ['Front-end'],
      color: '#E10098',
      tooltipId: 'skill-tailwind',
      formValue: 'Tailwind CSS,SiTailwindcss',
      selectable: true
   },
   {
      id: 'expo',
      name: 'Expo Go',
      icon: SiExpo,
      iconName: 'SiExpo',
      category: ['Tools', 'Front-end'],
      color: '#ffffff',
      tooltipId: 'skill-expo',
      formValue: 'Expo,SiExpo',
      selectable: true
   },
   {
      id: 'npm',
      name: 'NPM',
      icon: FaNpm,
      iconName: 'FaNpm',
      category: ['Tools'],
      color: '#CB3837',
      tooltipId: 'skill-npm',
      formValue: 'NPM,FaNpm',
      selectable: true
   },
   {
      id: 'yarn',
      name: 'Yarn',
      icon: FaYarn,
      iconName: 'FaYarn',
      category: ['Tools'],
      color: '#2C8EBB',
      tooltipId: 'skill-yarn',
      formValue: 'Yarn,FaYarn',
      selectable: true
   },
   {
      id: 'github',
      name: 'GitHub',
      icon: FaGithub,
      iconName: 'FaGithub',
      category: ['Tools'],
      color: '#ffffff',
      tooltipId: 'skill-github',
      formValue: 'GitHub,FaGithub',
      selectable: true
   },
   {
      id: 'netlify',
      name: 'Netlify',
      icon: SiNetlify,
      iconName: 'SiNetlify',
      category: ['Tools'],
      color: '#00C7B7',
      tooltipId: 'skill-netlify',
      formValue: 'Netlify,SiNetlify',
      selectable: true
   },
   {
      id: 'vscode',
      name: 'VS Code',
      icon: SiVisualstudiocode,
      iconName: 'SiVisualstudiocode',
      category: ['Tools'],
      color: '#007ACC',
      tooltipId: 'skill-vscode',
      formValue: 'VS Code,SiVisualstudiocode',
      selectable: true
   },
   {
      id: 'xcode',
      name: 'Xcode',
      icon: SiXcode,
      iconName: 'SiXcode',
      category: ['Tools'],
      color: '#157EFB',
      tooltipId: 'skill-xcode',
      formValue: 'Xcode,SiXcode',
      selectable: true
   },
   {
      id: 'powershell',
      name: 'PowerShell',
      icon: SiPowershell,
      iconName: 'SiPowershell',
      category: ['Tools'],
      color: '#5391FE',
      tooltipId: 'skill-powershell',
      formValue: 'PowerShell,SiPowershell',
      selectable: false
   },
   {
      id: 'azure',
      name: 'Azure',
      icon: SiMicrosoftazure,
      iconName: 'SiMicrosoftazure',
      category: ['Tools'],
      color: '#0089D6',
      tooltipId: 'skill-azure',
      formValue: 'Azure,SiMicrosoftazure',
      selectable: true
   },
   {
      id: 'androidstudio',
      name: 'Android Studio',
      icon: SiAndroidstudio,
      iconName: 'SiAndroidstudio',
      category: ['Tools'],
      color: '#3DDC84',
      tooltipId: 'skill-androidstudio',
      formValue: 'Android Studio,SiAndroidstudio',
      selectable: true
   }
]

export const selectableTechnologies = 
   allTechnologies.filter(tech => tech.selectable !== false)
