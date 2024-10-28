'use client';

import React from 'react';

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent';

import { 
   StyledEffectSwipe,
   StyledContainer,
   StyledRow,
   StyledContent, 
   StyledContentText,
   StyledContentIcons,
   StyledIconA,
   StyledTextOne,
   StyledTextTwo,
   StyledTextThree,
   FlipContainer,
   FlipCard,
   StyledImg,
} from '^/app/container/Header/HeaderContainer.styles';

import { IconsData } from '^/app/data/Icons/IconsData';

export const HeaderContainer = () => {
   return (
      <>
         <StyledContainer id='header'>
            <StyledRow>
               <StyledContent>
                     <FlipContainer>
                        <FlipCard>
                           <StyledImg src='/meone.png' front />
                           <StyledImg src='metwo.png' front={false} />
                        </FlipCard>
                     </FlipContainer> 
               </StyledContent>
               <StyledContent>
                  <StyledEffectSwipe>
                     <StyledContentText>
                           <StyledTextOne>I am</StyledTextOne>
                     </StyledContentText>
                  </StyledEffectSwipe>
                  <StyledEffectSwipe>
                     <StyledContentText>
                           <StyledTextTwo>Functionss</StyledTextTwo>
                     </StyledContentText>
                  </StyledEffectSwipe>
                  <StyledEffectSwipe>
                     <StyledContentText>
                        <StyledTextThree>Dedicated to front-end mobile and web development programming</StyledTextThree>
                     </StyledContentText>
                  </StyledEffectSwipe>
                  <StyledContentText>
                     <StyledContentIcons>
                        {IconsData.map(({ icon, link, text, color, hoverColor}, index) => {
                           return (
                                 <StyledIconA 
                                    key={`${index}`} 
                                    data-tooltip-place='bottom'
                                    data-tooltip-id={`tooltip-${index}`}
                                    data-tooltip-content={`${text}`}
                                    href={`${link}`}
                                    target='_blank'
                                    color={`${color}`}
                                    hoverColor={`${hoverColor}`}
                                 >
                                    {icon({size: 35})}
                                 </StyledIconA>
                           )
                        })}
                     </StyledContentIcons>
                  </StyledContentText>
               </StyledContent>
            </StyledRow>
            <DataTooltipComponent />  
         </StyledContainer>
      </>
   )
}
