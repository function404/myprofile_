import { motion } from 'framer-motion'

import styled from 'styled-components'
import { colors } from '^/app/utils/colors'

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
   margin: 0 0 120px 0;

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
   box-shadow: 0 0 50px ${colors.colorBlack};
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
