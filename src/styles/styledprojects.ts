import { motion } from 'framer-motion'

import styled, { keyframes } from 'styled-components'

const title = keyframes`
   0%,
   10%,
   100% {
      width: 0;
   }
   70%,
   90% {
      width: 100%;
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
   -webkit-text-stroke: 0.1vw var(--color-primaryimg);
   text-transform: uppercase;
   letter-spacing: 5px;

   &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      color: var(--color-primaryimg);
      -webkit-text-stroke: 0vw;
      border-right: 2px solid var(--color-primary);
      overflow: hidden;
      animation: ${title} 6s linear infinite;
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
   border-top: 5px solid var(--color-primary);
   border-left: 5px solid var(--color-primary);
   border-right: 5px solid var(--color-primary);
   border-radius: 10px;
`
export const StyledProjectsContainerContentCardsTitleProjectsSpan = styled.span`
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: var(--color-white);
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
   color: var(--color-light);
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
   color: var(--color-light);

   @media screen and (max-width: 960px) {
      font-size: 12px;
      margin: 0;
      visibility: visible;
   }
`
export const StyledProjectsContainerContentCardsBorderButtom = styled.div`
   width: 100%;
   padding: 35px;
   color: var(--color-text);
   border-bottom: 5px solid var(--color-primary);
   border-left: 5px solid var(--color-primary);
   border-right: 5px solid var(--color-primary);
   border-radius: 10px;
`
