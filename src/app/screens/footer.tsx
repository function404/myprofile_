'use client';

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

import DateYear from '^/app/utils/dateyear';

import Datatooltip from "^/app/components/datatooltip";

import {
   StyledFooter,
   StyledFooterMainBtn,
   StyledFooterMainBtnH5,
   StyledFooterMainBtnContentBtn,
   StyledFooterMainBtnContentBtnButton,
   IconLink,
} from '^/styles/styledfooter';

import { StyledMainMotion } from "^/app/globals";
import { IconsFooterData } from "../utils/iconsfooter";

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
                  {IconsFooterData.map(({ icon, link, text, color, hoverColor }, index) => (
                     <StyledFooterMainBtnContentBtnButton key={index}>
                           <IconLink
                              data-tooltip-place="top"
                              data-tooltip-id={`tooltip-${index}`}
                              data-tooltip-content={text}
                              href={link}
                              target='blank_'
                              color={color}
                              hoverColor={hoverColor}
                           >
                              {icon({size: 24})}
                           </IconLink>
                     </StyledFooterMainBtnContentBtnButton>
                     ))}
                  </StyledFooterMainBtnContentBtn>
                  <StyledFooterMainBtnH5>
                        ©2022 - {DateYear()} &copy; Reserved rights
                  </StyledFooterMainBtnH5>
               </StyledFooterMainBtn>
            </StyledMainMotion>
            <Datatooltip />    
         </div>
      </StyledFooter>
   </>
  );
}
