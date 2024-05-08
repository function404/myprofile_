'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
   faInstagram,
   faGithub,
   faLinkedinIn,
   faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import {
   StyledFooter,
   StyledFooterMainBtn,
   StyledFooterMainBtnH5,
   StyledFooterMainBtnContentBtn,
   StyledFooterMainBtnContentBtnButton,
   StyledFooterMainBtnContentBtnButtonAInstagram,
   StyledFooterMainBtnContentBtnButtonALinkedin,
   StyledFooterMainBtnContentBtnButtonAGithub,
   StyledFooterMainBtnContentBtnButtonATwitch,
} from '^/styles/styledfooter';

import anoAtual from '^/app/utils/data';

export default function Footer() {
  return (
   <>
      <StyledFooter>
         <StyledFooterMainBtn>
            <StyledFooterMainBtnContentBtn>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonAInstagram href="https://www.instagram.com/lincoln.mezzalira/" target='blank_'>
                     <FontAwesomeIcon icon={faInstagram} size="xl"/>
                  </StyledFooterMainBtnContentBtnButtonAInstagram>
               </StyledFooterMainBtnContentBtnButton>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonAGithub href="https://github.com/function404" target='blank_'>
                     <FontAwesomeIcon icon={faGithub} size="xl" />
                  </StyledFooterMainBtnContentBtnButtonAGithub>
               </StyledFooterMainBtnContentBtnButton>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonALinkedin href="https://www.linkedin.com/in/lincoln-novais-mezzalira-361962236/" target='blank_'>
                     <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                  </StyledFooterMainBtnContentBtnButtonALinkedin>
               </StyledFooterMainBtnContentBtnButton>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonATwitch href="https://www.twitch.tv/functionss_" target='blank_'>
                  <FontAwesomeIcon icon={faTwitch} size="xl" />
                  </StyledFooterMainBtnContentBtnButtonATwitch>
               </StyledFooterMainBtnContentBtnButton>
            </StyledFooterMainBtnContentBtn>
            <StyledFooterMainBtnH5>
                  ©2022 - {anoAtual()} &copy; Reserved rights
            </StyledFooterMainBtnH5>
         </StyledFooterMainBtn>
      </StyledFooter>
   </>
  );
}
