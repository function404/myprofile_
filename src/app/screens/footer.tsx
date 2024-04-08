'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
   faInstagram,
   faGithub,
   faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import {
   StyledFooter,
   StyledFooterMainBtn,
   StyledFooterMainBtnH5,
   StyledFooterMainBtnContentBtn,
   StyledFooterMainBtnContentBtnButton,
   StyledFooterMainBtnContentBtnButtonA
} from '^/styles/styledfooter';

import anoAtual from '^/app/utils/data';

export default function Footer() {
  return (
   <>
      <StyledFooter>
         <StyledFooterMainBtn>
            <StyledFooterMainBtnContentBtn>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonA href="https://www.instagram.com/lincoln.mezzalira/" target='blank_'>
                     <FontAwesomeIcon icon={faInstagram} />
                  </StyledFooterMainBtnContentBtnButtonA>
               </StyledFooterMainBtnContentBtnButton>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonA href="https://github.com/function404" target='blank_'>
                     <FontAwesomeIcon icon={faGithub} />
                  </StyledFooterMainBtnContentBtnButtonA>
               </StyledFooterMainBtnContentBtnButton>
               <StyledFooterMainBtnContentBtnButton>
                  <StyledFooterMainBtnContentBtnButtonA href="https://www.linkedin.com/in/lincoln-novais-mezzalira-361962236/" target='blank_'>
                     <FontAwesomeIcon icon={faLinkedinIn} />
                  </StyledFooterMainBtnContentBtnButtonA>
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
