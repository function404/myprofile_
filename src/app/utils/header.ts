import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";

import { colors } from '^/app/utils/colors';

const { colorWhite, colorInstagram, colorGithub, colorLinkedin, } = colors;

export const IconsHeaderData = [
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
        text: "GitHub",
        color: colorWhite,
        hoverColor: colorGithub,
    },
    { 
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/lincoln-novais-mezzalira/",
        text: "LinkedIn",
        color: colorWhite,
        hoverColor: colorLinkedin,
    },
]