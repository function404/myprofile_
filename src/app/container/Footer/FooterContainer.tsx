'use client';

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent';

import { useFooterContainerRules } from '^/app/container/Footer/FooterContainer.rules';
import {
   StyledFooter,
   StyledFooterMainBtn,
   StyledFooterMainBtnH5,
   StyledFooterMainBtnContentBtn,
   IconLink,
} from '^/app/container/Footer/FooterContainer.styles';

import { IconsData } from '^/app/data/Icons/IconsData';	

import DateYearUtils from '^/app/utils/DateYear/DateYearUtils';

import { StyledMainMotion } from '^/app/globals';

export const FooterContainer = () => {
   const {
      ref,
      mainControls,
   } = useFooterContainerRules()

   return (
      <>
         <StyledFooter>
            <div ref={ref} style={{ position: 'relative', alignItems: 'center' }}>
               <StyledMainMotion
                  variants={{
                     hidden: { opacity: 0, x: -100 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial='hidden'
                  animate={mainControls}
                  transition={{ duration: 2, delay: 0.5 }}
               >
                  <StyledFooterMainBtn>
                     <StyledFooterMainBtnContentBtn>
                     {IconsData.map(({ icon, link, text, color, hoverColor }, index) => {
                        return (
                           <IconLink
                           key={`${index}`} 
                              data-tooltip-place='top'
                              data-tooltip-id={`tooltip-${index}`}
                              data-tooltip-content={`${text}`}
                              href={`${link}`}
                              target='_blank'
                              color={`${color}`}
                              hoverColor={`${hoverColor}`}
                           >
                              {icon({size: 24})}
                           </IconLink>
                        )})}
                     </StyledFooterMainBtnContentBtn>
                     <StyledFooterMainBtnH5>
                           ©2022 - {DateYearUtils()} &copy; Reserved rights
                     </StyledFooterMainBtnH5>
                  </StyledFooterMainBtn>
               </StyledMainMotion>
               <DataTooltipComponent />    
            </div>
         </StyledFooter>
      </>
   );
}
