'use client'

import React from "react"

import { 
   StyledContainer,
   StyledRow,
   StyledContent, 
   StyledContentText,
   StyledTextOne,
   StyledTextTwo,
   StyledTextThree,
   FlipContainer,
   FlipCard,
   StyledImg,
} from "^/styles/styledheader"

export default function Header() {
   return (
      <>
         <StyledContainer>
            <StyledRow>
               <StyledContent>
                     <FlipContainer>
                        <FlipCard>
                           <StyledImg src="/meR.png" front />
                           <StyledImg src="dateme.png" front={false} />
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

                  </StyledContentText>
               </StyledContent>
            </StyledRow>
         </StyledContainer>
      </>
   )
}
