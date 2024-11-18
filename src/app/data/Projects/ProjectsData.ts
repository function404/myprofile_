import { 
    SiStyledcomponents,
    SiTypescript,
    SiJavascript,
    SiPhp,
    SiReact,
    SiHtml5,
    SiCss3
 } from 'react-icons/si';
 
 export const ProjectsData = [
    {
       title: 'Nova Lira Festas e Eventos',
       description: 'Website developed for the salon Nova Lira Festas e Eventos.',
       img: '/novalira.png',
       link: 'https://novalira.netlify.app/',
       target: true,
       techs: [
          { name: 'React', icon: SiReact },
          { name: 'Styled-components', icon: SiStyledcomponents },
          { name: 'TypeScript', icon: SiTypescript }         
       ]
    },
    {
       title: 'Museu de Infromática',
       description: 'Website developed for work purposes (course).',
       img: '/museuinfo.png',
       link: 'https://museuinfo.netlify.app',
       target: true,
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
       link: 'https://github.com/drypzz/SreSraBemEstar',
       target: true,
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
       link: 'https://quer-namora-comigo.netlify.app',
       target: true,
       techs: [
          { name: 'HTML', icon: SiHtml5 },
          { name: 'CSS', icon: SiCss3 },
          { name: 'JavaScript', icon: SiJavascript  }         
       ]
    },
    {
      title: 'Poject CRUD VW',
      description: 'Website developed for work purposes (course).',
      img: '/vwcrud.png',
      link: 'https://github.com/function404/vwcrud_',
      target: true,
      techs: [
         { name: 'HTML', icon: SiHtml5 },
         { name: 'CSS', icon: SiCss3 },
         { name: 'JavaScript', icon: SiJavascript  },
         { name: 'PHP', icon: SiPhp }        
      ]
   },
    {
       title: 'Personal Website',
       description: 'My portfolio.',
       img: '/myportfolio.png',
       link: '#header',
       target: false,
       techs: [
          { name: 'React', icon: SiReact },
          { name: 'Styled-components', icon: SiStyledcomponents },
          { name: 'TypeScript', icon: SiTypescript }         
       ]
    }
 ];
 