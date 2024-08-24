import styled, { keyframes } from 'styled-components';
import { colors } from '^/app/utils/colors';

interface IconLinkProps {
   color?: string;
   hoverColor?: string;
}

const flipAnimation = keyframes`
   0% {
      transform: perspective(1000px) rotateY(0deg);
   }
   50% {
      transform: perspective(1000px) rotateY(180deg);
   }
   100% {
      transform: perspective(1000px) rotateY(360deg);
   }
`

export const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
   height: 100dvh;
`

export const StyledRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 15vh;
   
   @media screen and (max-width: 960px) {
      flex-direction: column;
      gap: 0;
   }
   
   @media screen and (max-width: 1024px) {
      flex-direction: column;   
      gap: 5vh;
   }
`

export const StyledContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 20px;

   @media screen and (max-width: 1024px) {
      align-items: center;
      text-align: center;
   }

   @media screen and (max-width: 960px) {
      align-items: center;
      text-align: center;
   }
`

export const StyledContentText = styled.div`
   margin-bottom: 25px;
`

export const StyledContentIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
`

export const StyledIconA = styled.a<IconLinkProps>`
   transition: all .5s ease-in-out;
   color: ${props => props.color};
   
   &:hover {
      color: ${props => props.hoverColor};
   }
`

export const StyledTextOne = styled.p`
   font-size: 120px;
   color: ${colors.colorWhite};
   text-align: left;
   font-weight: bold;
   text-transform: uppercase;

   @media screen and (max-width: 1024px) {
      font-size: 96px;
   }
   
   @media screen and (max-width: 960px) {
      font-size: 72px;
      text-align: center;
   }
`
export const StyledTextTwo = styled.p`
   font-size: 100px;
   margin-left: 30px;
   color: ${colors.colorWhite};
   text-align: left;
   font-weight: bold;
   text-transform: uppercase;

   @media screen and (max-width: 1024px) {
      font-size: 72px;
   }
   
   @media screen and (max-width: 960px) {
      font-size: 36px;
      margin-left: 0;
   }
`

export const StyledTextThree = styled.h4`
   color: ${colors.colorLight};
   text-align: left;
   font-weight: bold;

   @media screen and (max-width: 1024px) {
      font-size: 28px;
   }
   
   @media screen and (max-width: 960px) {
      font-size: 1rem;
      text-align: center;
   }
`

export const FlipContainer = styled.div`
   perspective: 1000px;
   width: 100%;
   height: 100%;
`

export const FlipCard = styled.div`
   width: 500px;
   height: 500px;
   position: relative;
   transform-style: preserve-3d;
   animation: ${flipAnimation} 10s infinite;

   @media screen and (max-width: 960px) {
      width: 250px;
      height: 250px;
   }
`

export const StyledImg = styled.img<{ front: boolean }>`
   width: 100%;
   height: 100%;
   backface-visibility: hidden;
   object-fit: cover;
   position: absolute;
   top: 0;
   left: 0;
   transform: ${({ front }) => (front ? 'rotateY(0deg)' : 'rotateY(180deg)')};
   border-radius: 50%;
   border: 2px solid ${colors.colorWhite};
   box-shadow: 0px 0px 20px ${colors.colorLight};
`