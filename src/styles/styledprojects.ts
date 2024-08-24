import styled from 'styled-components'
import { colors } from '^/app/utils/colors'

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
      margin-bottom: 40px;
   }
`
export const StyledProjectsContainerContentCards = styled.div`
   width: 650px;
   box-shadow: 0 0 50px ${colors.colorBlack};
   margin: 20px;
   border-radius: 12px;
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
   border-radius: 12px;
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
   pointer-events: none;

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
   pointer-events: none;

   @media screen and (max-width: 960px) {
      font-size: 12.5px;
      padding: 15px 0;
   }
`
export const StyledProjectsContainerContentCardsButtomCards = styled.button`
   width: 100%;
   height: 50%;
   padding: 0 20px;
   background: none;
   border: none;

   @media screen and (max-width: 960px) {
      padding: 20px;
   }
`
export const StyledProjectsContainerContentCardsButtomCardsImg = styled.img`
   width: 85%;
   height: 100%;
   margin: 0 auto;
   box-shadow: 0 0 20px ${colors.colorPrimaryImg};
   border-radius: 12px;
   cursor: pointer;
   transition: all .3s ease-in-out;

   &:hover {
      box-shadow: 0 0 10px ${colors.colorPrimary};
      transition: all .3s ease-in-out;
   }

   @media screen and (max-width: 960px) {
      width: 85%;
      height: 100%;
   }

   @media screen and (max-width: 460px) {
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
export const StyledContainerTechs = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 35px;
   gap: 20px;
   flex-wrap: wrap;

   @media screen and (max-width: 960px) {
      padding-top: 20px;
      gap: 8px;
   }
`
export const StyledContentTechs = styled.div`
   color: ${colors.colorWhite};
   text-align: center;
   text-transform: uppercase;
   box-shadow: 0 0 20px ${colors.colorPrimaryImg};
   padding: 8px 16px;
   border-radius: 12px;
   transition: all .3s ease-in-out;

   &:hover {
      box-shadow: 0 0 5px ${colors.colorPrimary};
      transition: all .3s ease-in-out;
   }

   @media screen and (max-width: 960px) {
      box-shadow: 0 0 10px ${colors.colorPrimary};
   }
`
export const StyledIconsNameTechs = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   font-size: 16px;
   pointer-events: none;

   @media screen and (max-width: 960px) {
      font-size: 12px;
   }
`
export const StyledProjectsContainerContentCardsBorderButtom = styled.div`
   width: 100%;
   padding: 35px;
   border-bottom: 5px solid ${colors.colorPrimary};
   border-left: 5px solid ${colors.colorPrimary};
   border-right: 5px solid ${colors.colorPrimary};
   border-radius: 12px;
`
