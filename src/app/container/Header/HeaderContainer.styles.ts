import styled, { keyframes } from 'styled-components';

import { IIconLinkProps } from '^/app/data/Icons/IconsData.types';

import { colors } from '^/theme/Colors/Colors';

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
const opacity = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`
const swipe = keyframes`
   0% {
      right: 100%;
      left: 0;
      width: 0%;
   }
   50% {
      right: 0;
      left: 0;
      width: 100%;
   }
   100% {
      right: 0;
      left: 100%;
      width: 0%;
   }
`
export const StyledEffectSwipe = styled.div`
   margin-top: 5px;
   margin-bottom: 5px;
   position: relative;
   width: fit-content;

   &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 100%;
      width: 0%;
      height: 100%;
      background-color: ${colors.colorPrimaryImg};
      animation: ${swipe} 1.5s ease-out 1s forwards;
   }
`
export const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
   height: 100dvh;

   @media screen and (max-width: 1024px) {
      height: auto;
   }
`
export const StyledRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 15vh;
   
   @media screen and (max-width: 1024px) {
      flex-direction: column;   
      gap: 0;
   }

   @media screen and (max-width: 960px) {
      flex-direction: column;
      gap: 0;
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
   margin-top: 5px;
   margin-bottom: 25px;
`

export const StyledContentIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   opacity: 0;
   animation: ${opacity} 0.5s ease-in-out 1.75s forwards;
`
export const StyledIconA = styled.a<IIconLinkProps>`
   transition: all .5s ease-in-out;
   color: ${props => props.color};
   
   &:hover {
      color: ${props => props.hoverColor};
   }
`
export const StyledTextOne = styled.p`
   font-size: 120px;
   color: ${colors.colorWhite};
   margin-top: 5px;
   margin-bottom: 5px;
   text-align: left;
   font-weight: bold;
   text-transform: uppercase;
   opacity: 0;
   animation: ${opacity} 0.01s ease-out 1.75s forwards;

   @media screen and (max-width: 1024px) {
      font-size: 72px;
   }
   
   @media screen and (max-width: 960px) {
      font-size: 56px;
      text-align: center;
   }
`
export const StyledTextTwo = styled.p`
   font-size: 100px;
   color: ${colors.colorWhite};
   text-align: left;
   font-weight: bold;
   text-transform: uppercase;
   opacity: 0;
   animation: ${opacity} 0.01s ease-out 1.75s forwards;

   @media screen and (max-width: 1024px) {
      font-size: 56px;
      margin-left: 0;
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
   opacity: 0;
   animation: ${opacity} 0.01s ease-out 1.75s forwards;

   @media screen and (max-width: 1024px) {
      font-size: 24px;
   }
   
   @media screen and (max-width: 960px) {
      font-size: 1rem;
      text-align: center;
   }
`
export const FlipContainer = styled.div`
   perspective: 1200px;
   width: 100%;
   height: 100%;
`
export const FlipCard = styled.div`
   width: 500px;
   height: 500px;
   position: relative;
   transform-style: preserve-3d;
   animation: ${flipAnimation} 7s infinite;

   @media screen and (max-width: 1024px) {
      width: 300px;
      height: 300px;
   }

   @media screen and (max-width: 960px) {
      width: 200px;
      height: 200px;
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
