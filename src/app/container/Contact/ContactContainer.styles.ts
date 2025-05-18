import styled, { keyframes } from 'styled-components'

import { colors } from '^/theme/Colors/Colors'

const fadeIn = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`
export const StyledCenter = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`
export const StyledForm = styled.form`
   width: 50%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   box-shadow: 0 0 50px ${colors.colorBlack};
   border-radius: 12px;
   margin-bottom: 35px;

   @media screen and (max-width: 960px) {
      width: 100%;
      margin: 20px;
   }
`
export const StyledContent = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;   
   margin: 0px 30px;

   @media screen and (max-width: 960px) {
      margin: 0px 25px;
   }
`
export const StyledLabel = styled.label`
   font-size: 20px;
   margin: 10px 0px 10px 0px;
   color: ${colors.colorLight};

   @media screen and (max-width: 960px) {
      font-size: 16px;
   }
`
export const StyledInput = styled.input`
   height: 30px;
   margin: 5px 20px 20px 20px;  
   padding: 10px; 
   font-size: 16px;
   background-color: transparent;
   border: none;
   border-bottom: 1px solid ${colors.colorPrimary};
   color: ${colors.colorWhite};
   transition: all .2s ease-in-out;

   &:focus {
      outline: none;
      border-bottom: 1px solid ${colors.colorBgScrollbar};
   }

   &:hover {
      transition: all .2s ease-in-out;
      border-bottom: 1px solid ${colors.colorBgScrollbar};
   }

   @media screen and (max-width: 960px) {
      font-size: 12px;
      margin: 5px 10px 10px 10px;
   }
`
export const StyledTextArea = styled.textarea`
   height: 100px;
   margin: 5px 20px 20px 20px;
   padding: 10px;
   font-size: 16px;
   font-family: 'Roboto', sans-serif;
   background-color: transparent;
   border: none;
   resize: none;
   border: 1px solid ${colors.colorPrimary};
   color: ${colors.colorWhite};

   &:focus {
      outline: none;
      border: 1px solid ${colors.colorBgScrollbar}; 
   }

   &:hover {
      transition: all .2s ease-in-out;
      border: 1px solid ${colors.colorBgScrollbar};
   }

   @media screen and (max-width: 960px) {
      font-size: 12px;
      margin: 5px 10px 10px 10px;
   }
`
export const StyledButtonSubmit = styled.button`
   width: 30%;
   height: 40px;
   margin-top: 30px;
   font-size: 16px;
   text-transform: uppercase;
   cursor: pointer;
   background-color: transparent;
   color: ${colors.colorPrimary};
   border: 1px solid ${colors.colorPrimary};
   border-radius: 12px;
   transition: all .2s ease-in-out;

   &:hover {
      box-shadow: 0px 0px 20px ${colors.colorPrimary};
      background-color: ${colors.colorPrimary};
      color: ${colors.colorBlack};
      transition: all .2s ease-in-out;
   }

   @media screen and (max-width: 960px) {
      width: 50%;
      font-size: 12px;
   }
`
export const StyledAlertError = styled.div`
   color: ${colors.colorError};
   background-color: ${colors.colorErrorAlert};
   padding: 15px ;
   font-weight: bold;
   border-radius: 12px;
   animation: ${fadeIn} .6s;
`
export const StyledAlertSuccess = styled.div<{ success?: boolean }>`
   color: ${colors.colorSend};
   background-color: ${colors.colorSuccess};
   padding: 15px ;
   font-weight: bold;
   border-radius: 12px;
   animation: ${fadeIn} .6s;
`