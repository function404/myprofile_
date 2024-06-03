import styled from "styled-components";
import { colors } from "^/app/utils/colors";

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
   border-radius: 10px;
   margin-bottom: 35px;

   @media screen and (max-width: 960px) {
      width: 90%;
   }
`
export const StyledContent = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;   
   margin: 0px 30px 0px 30px;
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
   font-size: 16px;
   background-color: transparent;
   border: none;
   border-bottom: 1px solid ${colors.colorPrimary};
   color: ${colors.colorLight};

   &:focus {
      outline: none;
   }

   @media screen and (max-width: 960px) {
      font-size: 12px;
   }
`
export const StyledTextArea = styled.textarea`
   height: 100px;
   margin: 5px 20px 20px 20px;
   font-size: 16px;
   background-color: transparent;
   border: none;
   border-bottom: 1px solid ${colors.colorPrimary};
   color: ${colors.colorLight};

   &:focus {
      outline: none;
   }
`
export const StyledButtonSubmit = styled.button`
   width: 30%;
   height: 40px;
   margin-top: 30px;
   font-size: 16px;
   text-transform: uppercase;
   background-color: transparent;
   color: ${colors.colorSend};
   border: 1px solid ${colors.colorSend};
   border-radius: 10px;
   transition: 0.2s ease-in-out;

   &:hover {
      background-color: ${colors.colorSend};
      color: ${colors.colorWhite};
      transition: .2s ease-in-out;
   }

   @media screen and (max-width: 960px) {
      width: 50%;
      font-size: 12px;
   }
`
export const StyledAlertError = styled.div`
   color: ${colors.colorError};
   background-color: ${colors.colorErrorAlert};
   padding: 10px ;
   font-weight: bold;
`
export const StyledAlertSuccess = styled.div<{ success?: boolean }>`
   color: ${colors.colorSend};
   background-color: ${colors.colorSuccess};
   padding: 10px ;
   font-weight: bold;
`