import { faHtml5, faCss3Alt, faJs, faPhp, faReact, } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const ProjectsData = [
   {
      title: "Nova Lira Festas e Eventos",
      description: "Website developed for the salon Nova Lira Festas e Eventos.",
      img: "/novalira.png",
      link: "https://novalira.netlify.app/",
      techs: [
         { name: "React", icon: faReact },
         { name: "Styled-components", icon: faCode },
         { name: "TypeScript", icon: faCode }         
      ]
   },
   {
      title: "Museu de Infromática",
      description: "Website developed for work purposes (course).",
      img: "/museuinfo.png",
      link: "https://museuinfo.netlify.app",
      techs: [
         { name: "HTML", icon: faHtml5 },
         { name: "CSS", icon: faCss3Alt },
         { name: "JavaScript", icon: faJs }         
      ]
   },
   {
      title: "Sr. & Sra. Bem Estar",
      description: "Website developed for work purposes (course).",
      img: "/sresra.png",
      link: "https://sresrabemestar.000webhostapp.com/",
      techs: [
         { name: "PHP", icon: faPhp }, 
         { name: "CSS", icon: faCss3Alt }, 
         { name: "JavaScript", icon: faJs }         
      ]
   },
   {
      title: "Quer Namorar Comigo?",
      description: "Website developed for Valentine's Day.",
      img: "/dateme.png",
      link: "https://quer-namora-comigo.netlify.app",
      techs: [
         { name: "HTML", icon: faHtml5 },
         { name: "CSS", icon: faCss3Alt },
         { name: "JavaScript", icon: faJs }         
      ]
   },
   {
      title: "Personal Website",
      description: "My portfolio.",
      img: "/myportfolio.png",
      link: "https://function404.netlify.app/",
      techs: [
         { name: "React", icon: faReact },
         { name: "Styled-components", icon: faCode },
         { name: "TypeScript", icon: faCode }         
      ]
   }
];
