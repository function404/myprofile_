import { motion } from 'framer-motion'

import styled, { keyframes } from 'styled-components'
import { colors } from '^/app/utils/colors'

const glitchAnimation = keyframes`
   0% {
      clip: rect(18px, 9999px, 82px, 0);
   }
   5% {
      clip: rect(36px, 9999px, 64px, 0);
   }
   10% {
      clip: rect(85px, 9999px, 12px, 0);
   }
   15% {
      clip: rect(2px, 9999px, 89px, 0);
   }
   20% {
      clip: rect(58px, 9999px, 51px, 0);
   }
   25% {
      clip: rect(94px, 9999px, 66px, 0);
   }
   30% {
      clip: rect(9px, 9999px, 86px, 0);
   }
   35% {
      clip: rect(75px, 9999px, 44px, 0);
   }
   40% {
      clip: rect(53px, 9999px, 84px, 0);
   }
   45% {
      clip: rect(64px, 9999px, 92px, 0);
   }
   50% {
      clip: rect(70px, 9999px, 56px, 0);
   }
   55% {
      clip: rect(6px, 9999px, 27px, 0);
   }
   60% {
      clip: rect(68px, 9999px, 30px, 0);
   }
   65% {
      clip: rect(93px, 9999px, 41px, 0);
   }
   70% {
      clip: rect(16px, 9999px, 4px, 0);
   }
   75% {
      clip: rect(17px, 9999px, 24px, 0);
   }
   80% {
      clip: rect(96px, 9999px, 18px, 0);
   }
   85% {
      clip: rect(97px, 9999px, 9px, 0);
   }
   90% {
      clip: rect(25px, 9999px, 95px, 0);
   }
   95% {
      clip: rect(8px, 9999px, 23px, 0);
   }
   100% {
      clip: rect(94px, 9999px, 38px, 0);
   }
`
export const StyledTitle = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 40px;
`
export const StyledTitleH2 = styled.h2`
   position: relative;
   font-size: 72px;
   font-family: "Poppins", sans-serif;
   margin-bottom: 80px;
   color: ${colors.colorPrimaryImg};
   text-transform: uppercase;
   letter-spacing: 5px;

   &::before,
   &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }

   &::before {
      left: 2.5px;
      text-shadow: -2.5px 0 ${colors.colorWhite};
      animation: ${glitchAnimation} 2.5s infinite linear alternate-reverse;
   }
   
   &::after {
      left: -2.5px;
      text-shadow: 2.5px 0 ${colors.colorBlack};
      animation: ${glitchAnimation} 3.5s infinite linear alternate-reverse;
   }

   @media screen and (max-width: 960px) {
      font-size: 42px;
      margin: 30px 0;
   }
`
export const StyledProjectsMainMotion = styled(motion.div)`
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 960px) {
      width: 100%;
      height: 100%;
   }
`
export const StyledProjectsContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   position: relative;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   @media screen and (max-width: 960px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
   }
`
export const StyledProjectsContainerContent = styled.div`
   width: 100%;
   height: 100%;
   text-align: center;
   justify-content: center;
   align-items: center;
   position: relative;
   flex-wrap: wrap;
   display: flex;

   @media screen and (max-width: 960px) {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
   }
`
export const StyledProjectsContainerContentCards = styled.div`
   width: 750px;
   box-shadow: 0 0 50px rgb(0 0 0);
   margin: 20px;
   border-radius: 22px;
   justify-content: space-between;

   @media screen and (max-width: 960px) {
      width: 100%;
      text-align: center;
   }
`
export const StyledProjectsContainerContentCardsTitleProjects = styled.div`
   width: 100%;
   padding: 35px 20px 20px 20px;
   border-top: 5px solid ${colors.colorPrimary};
   border-left: 5px solid ${colors.colorPrimary};
   border-right: 5px solid ${colors.colorPrimary};
   border-radius: 10px;
`
export const StyledProjectsContainerContentCardsTitleProjectsSpan = styled.span`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: ${colors.colorWhite};
   font-family: "Poppins", sans-serif;
   font-size: 22px;
   font-weight: bold;
   text-decoration: none;
   list-style: none;

   @media screen and (max-width: 960px) {
      font-size: 18px;
   }
`
export const StyledProjectsContainerContentCardsInfo = styled.div`
   width: 100%;
   padding: 30px;
   color: ${colors.colorLight};
   font-size: 18px;
   font-weight: bold;
   font-style: italic;

   @media screen and (max-width: 960px) {
      font-size: 12.5px;
      padding: 15px 0;
   }
`
export const StyledProjectsContainerContentCardsButtomCards = styled.button`
   width: 100%;
   height: 50%;
   padding: 20px;
   cursor: pointer;
   background: none;
   border: none;
`
export const StyledProjectsContainerContentCardsButtomCardsImg = styled.img`
   width: 600px;
   height: 300px;
   margin: 0 auto;
   box-shadow: 0 0 20px rgb(0, 194, 204, 60%);
   border-radius: 10px;

   @media screen and (max-width: 960px) {
      width: 100%;
      height: 100%;
   }
`
export const StyledProjectsContainerContentCardsInfoButtomCards = styled.div`
   visibility: hidden;
   color: ${colors.colorLight};

   @media screen and (max-width: 960px) {
      font-size: 12px;
      margin: 0;
      visibility: visible;
   }
`
export const StyledProjectsContainerContentCardsBorderButtom = styled.div`
   width: 100%;
   padding: 35px;
   border-bottom: 5px solid ${colors.colorPrimary};
   border-left: 5px solid ${colors.colorPrimary};
   border-right: 5px solid ${colors.colorPrimary};
   border-radius: 10px;
`
