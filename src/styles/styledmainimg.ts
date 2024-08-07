import styled, { keyframes } from 'styled-components';
import { colors } from '^/app/utils/colors';

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
export const StyledCenter = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const StyledMainImg = styled.div`
   border-radius: 50px;
   position: relative;
   background: url("/mee.png") no-repeat center;
   background-size: cover;
   margin: 0 auto;
   width: 85vw;
   height: 85vh;
   overflow: hidden;
   animation: ${opacity} 4s ease-out;

   @media screen and (max-width: 960px) {
      width: 320px;
      height: 320px;
      border-radius: 100%;
      background: url("/meR.png") no-repeat center;
      background-size: cover;
      border: 1px solid ${colors.colorPrimaryImg};
      box-shadow: 0px 0px 40px ${colors.colorPrimary};
      animation: ${opacity} 4s ease;
   }

   @media screen and (max-width: 325px) {
      width: 220px;
      height: 220px;
   }
`
export const StyledMainImgTextOverlayB = styled.div`
   position: absolute;
   top: -20%;
   left: 10%;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: left;
   align-items: center;

   @media screen and (max-width: 960px) {
      left: 0;
      display: none;
   }
`
export const StyledMainImgTextOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 15%;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: left;
   align-items: center;

   @media screen and (max-width: 960px) {
      left: 0;
      display: none;
   }
`
export const StyledMainImgTextOverlayC = styled.div`
   position: absolute;
   top: 15%;
   left: 10%;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: left;
   align-items: center;

   @media screen and (max-width: 960px) {
      left: 0;
      display: none;
   }
`
export const StyledMainImgTextOverlaySwipe = styled.div`
   position: relative;
   width: fit-content;

   &::after {
   display: block;
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 100%;
   width: 0%;
   height: 100%;
   background-color: ${colors.colorPrimaryImg};
   animation: ${swipe} 1.5s ease-out 1s forwards;
`
export const StyledMainImgTextOverlaySwipeH1 = styled.h1`
   display: flex;
   color: ${colors.colorWhite};
   font-size: 135px;
   font-weight: 900;
   text-transform: uppercase;
   opacity: 0;
   animation: ${opacity} 0.01s ease-out 1.75s forwards;

   @media screen and (max-width: 960px) {
      display: flex;
      color: ${colors.colorWhite};
      font-size: 72px;
      font-weight: 900;
      text-transform: uppercase;
      margin: 15px;
      opacity: 0;
      animation: ${opacity} 0.01s ease-out 1.75s forwards;
   }
`
export const StyledMainImgTextOverlaySwipeH3 = styled.h3`
   display: flex;
   color: ${colors.colorWhite};
   font-size: 100px;
   font-weight: 900;
   text-transform: uppercase;
   opacity: 0;
   animation: ${opacity} 0.01s ease-out 1.75s forwards;

   @media screen and (max-width: 960px) {
      display: flex;
      color: ${colors.colorWhite};
      font-size: 36px;
      font-weight: 900;
      text-transform: uppercase;
      margin: 0 15px;
      opacity: 0;
      animation: ${opacity} 0.01s ease-out 1.75s forwards;
   }
`
export const StyledMainImgTextOverlaySwipeH4 = styled.h4`
   display: flex;
   color: ${colors.colorWhite};
   font-size: 20px;
   opacity: 0;
   pointer-events: none;
   animation: ${opacity} 0.01s ease-out 1.75s forwards;

   @media screen and (max-width: 960px) {
      display: flex;
      color: ${colors.colorLight};
      font-size: 15px;
      max-width: 300px;
      text-align: center;
      margin: 15px;
      opacity: 0;
      animation: ${opacity} 0.01s ease-out 1.75s forwards;
   }
`
export const StyledMainResponsive = styled.div`
   display: none;

   @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`