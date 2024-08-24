'use client'

import React from "react"

import { 
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
} from "^/styles/styledheader"

import { IconsHeaderData } from "^/app/utils/header"

export default function Header() {
   return (
      <>
         <StyledContainer>
            <StyledRow>
               <StyledContent>
                     <FlipContainer>
                        <FlipCard>
                           <StyledImg src="/meR.png" front />
                           <StyledImg src="mee2.png" front={false} />
                        </FlipCard>
                     </FlipContainer>
               </StyledContent>
               <StyledContent>
                  <StyledContentText>
                     <StyledTextOne>I am</StyledTextOne>
                  </StyledContentText>
                  <StyledContentText>
                     <StyledTextTwo>Functionss</StyledTextTwo>
                  </StyledContentText>
                  <StyledContentText>
                     <StyledTextThree>Dedicated to front-end mobile and web development programming</StyledTextThree>
                  </StyledContentText>
                  <StyledContentText>
                     <StyledContentIcons>
                     {IconsHeaderData.map(({ icon, link, text}, index) => {
                        return (
                              <StyledIconA 
                                 data-tooltip-place="bottom"
                                 data-tooltip-id={`tooltip-${index}`}
                                 data-tooltip-content={text.toString()}   
                                 key={index.toString()} 
                                 href={link} 
                                 target="_blank"
                              >
                                 {icon({size: 40})}
                              </StyledIconA>
                        )
                     })}
                     </StyledContentIcons>
                  </StyledContentText>
               </StyledContent>
            </StyledRow>
            
         </StyledContainer>
      </>
   )
}
