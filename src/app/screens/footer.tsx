'use client';

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DateYear from '^/app/utils/dateyear';

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

import { StyledMainMotion } from "^/app/globals";

export default function Footer() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const mainControls = useAnimation();

   useEffect(() => {
      if (isInView) {
         mainControls.start("visible");
      }
   }, [isInView, mainControls]);
  return (
   <>
      <StyledFooter>
         <div ref={ref} style={{ position: "relative", alignItems: "center" }}>
            <StyledMainMotion
               variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
               }}
               initial="hidden"
               animate={mainControls}
               transition={{ duration: 2, delay: 0.5 }}
            >
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
                        ©2022 - {DateYear()} &copy; Reserved rights
                  </StyledFooterMainBtnH5>
               </StyledFooterMainBtn>
            </StyledMainMotion>
         </div>
      </StyledFooter>
   </>
  );
}
