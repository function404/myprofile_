import { IconType } from 'react-icons';
import {
   SiStyledcomponents,
   SiTypescript,
   SiJavascript,
   SiReact,
   SiPhp,
   SiHtml5,
   SiCss3,
   SiNextdotjs
 } from 'react-icons/si';

export interface ITech {
  name: string;
  icon: IconType;
}

export interface IProject {
  title: string;
  description: string;
  img: string;
  imgs: string[];
  link: string;
  target: boolean;
  type: 'web' | 'mobile';
  techs: ITech[];
}
 
export const ProjectsData: IProject[] = [
   {
      title: 'Nova Lira Festas e Eventos',
      description: 'Website developed for the salon Nova Lira Festas e Eventos.',
      img: '/novalira.png',
      imgs: [],
      link: 'https://novalira.netlify.app/',
      target: true,
      type: 'web',
      techs: [
         { name: 'Next', icon: SiNextdotjs },
         { name: 'Styled-components', icon: SiStyledcomponents },
         { name: 'TypeScript', icon: SiTypescript }         
      ]
   },
   {
      title: 'Museu de Infromática',
      description: 'Website developed for work purposes (course).',
      img: '/museuinfo.png',
      imgs: [],
      link: 'https://museuinfo.netlify.app',
      target: true,
      type: 'web',
      techs: [
         { name: 'HTML', icon: SiHtml5 },
         { name: 'CSS', icon: SiCss3 },
         { name: 'JavaScript', icon: SiJavascript  }         
      ]
   },
   {
      title: 'Sr. & Sra. Bem Estar',
      description: 'Website developed for work purposes (course).',
      img: '/sresra.png',
      imgs: [],
      link: 'https://github.com/drypzz/SreSraBemEstar',
      target: true,
      type: 'web',
      techs: [
         { name: 'PHP', icon: SiPhp }, 
         { name: 'CSS', icon: SiCss3 }, 
         { name: 'JavaScript', icon: SiJavascript  }         
      ]
   },
   {
      title: 'Quer Namorar Comigo?',
      description: 'Website developed for Valentine\'s Day.',
      img: '/dateme.png',
      imgs: [],
      link: 'https://quer-namora-comigo.netlify.app',
      target: true,
      type: 'web',
      techs: [
         { name: 'HTML', icon: SiHtml5 },
         { name: 'CSS', icon: SiCss3 },
         { name: 'JavaScript', icon: SiJavascript  }         
      ]
   },
   {
      title: 'Project CRUD VW',
      description: 'Website developed for work purposes (course).',
      img: '/vwcrud.png',
      imgs: [],
      link: 'https://github.com/function404/vwcrud_',
      target: true,
      type: 'web',
      techs: [
         { name: 'CSS', icon: SiCss3 },
         { name: 'JavaScript', icon: SiJavascript  },
         { name: 'PHP', icon: SiPhp }        
      ]
   },
   {
      title: 'Personal Website',
      description: 'My portfolio.',
      img: '/myportfolio.png',
      imgs: [],
      link: '#header',
      target: false,
      type: 'web',
      techs: [
         { name: 'Next', icon: SiNextdotjs },
         { name: 'Css', icon: SiCss3 },
         { name: 'TypeScript', icon: SiTypescript }         
      ]
   },
   // {
   //    title: 'Eco Health Game',
   //    description: 'App developed for work purposes (course).',
   //    img: '',
   //    imgs: ['/ecohealth1.png', '/ecohealth2.png', '/ecohealth3.png'], 
   //    link: 'https://github.com/function404',
   //    target: true,
   //    type: 'mobile',
   //    techs: [
   //       { name: 'React Native', icon: SiReact },
   //    ]
   // },
   // {
   //    title: 'Splat Game',
   //    description: 'App developed for work purposes (course).',
   //    img: '',
   //    imgs: ['/splatgame1.png', '/splatgame2.png', '/splatgame3.png'], 
   //    link: 'https://github.com/function404/splatgame_',
   //    target: true,
   //    type: 'mobile',
   //    techs: [
   //       { name: 'React Native', icon: SiReact },
   //    ]
   // }
]
