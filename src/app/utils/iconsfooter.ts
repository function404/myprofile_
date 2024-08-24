import { 
   FaInstagram,    
   FaGithub,
   FaLinkedinIn,
   FaTwitch
} from "react-icons/fa";

import { colors } from '^/app/utils/colors';

const { colorWhite, colorInstagram, colorGithub, colorLinkedin, colorTwitch } = colors;

export const IconsFooterData = [
      {
         icon: FaInstagram,
         link: "https://www.instagram.com/lincoln.mezzalira/",
         text: "Instagram",
         color: colorWhite,
         hoverColor: colorInstagram,
      },
      {
         icon: FaGithub,
         link: "https://github.com/function404",
         text: "Github",
         color: colorWhite,
         hoverColor: colorGithub,
      },
      {
         icon: FaLinkedinIn,
         link: "https://www.linkedin.com/in/lincoln-novais-mezzalira/",
         text: "Linkedin",
         color: colorWhite,
         hoverColor: colorLinkedin,
      },
      {
         icon: FaTwitch,
         link: "https://www.twitch.tv/functionss_",
         text: "Twitch",
         color: colorWhite,
         hoverColor: colorTwitch,
      }
]