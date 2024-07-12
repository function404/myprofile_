import { 
   faInstagram,
   faGithub,
   faLinkedinIn,
   faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import { colors } from '^/app/utils/colors';
import { text } from "stream/consumers";

const { colorWhite, colorInstagram, colorGithub, colorLinkedin, colorTwitch } = colors;

export const IconsFooterData = [
      {
         icon: faInstagram,
         link: "https://www.instagram.com/lincoln.mezzalira/",
         text: "Instagram",
         color: colorWhite,
         hoverColor: colorInstagram,
      },
      {
         icon: faGithub,
         link: "https://github.com/function404",
         text: "Github",
         color: colorWhite,
         hoverColor: colorGithub,
      },
      {
         icon: faLinkedinIn,
         link: "https://www.linkedin.com/in/lincoln-novais-mezzalira/",
         text: "Linkedin",
         color: colorWhite,
         hoverColor: colorLinkedin,
      },
      {
         icon: faTwitch,
         link: "https://www.twitch.tv/functionss_",
         text: "Twitch",
         color: colorWhite,
         hoverColor: colorTwitch,
      }
]