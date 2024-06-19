import styled from "styled-components";
import { colors } from '^/app/utils/colors';

export const StyledFooter = styled.footer`
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   background: radial-gradient(at 100% 90%, ${colors.colorPrimaryImg}, transparent 50%), radial-gradient(at 0% 100%, ${colors.colorPrimaryImg}, transparent 50%);
`
export const StyledFooterMainBtn = styled.div`
   display: block;
   text-align: center;
`
export const StyledFooterMainBtnH5 = styled.h5`
   text-align: center;
   padding: 15px;
   color: ${colors.colorWhite};  
`
export const StyledFooterMainBtnContentBtn = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
export const StyledFooterMainBtnContentBtnButton = styled.div`
   width: 100%;
   height: 100%;
   padding: 10px 20px;
`
export const StyledFooterMainBtnContentBtnButtonAInstagram = styled.a`   
   text-decoration: none;
   transition: all .5s ease-in-out;
   color: ${colors.colorWhite};   

   &:hover {
      color: ${colors.colorInstagram};  
      transition: all .5s ease-in-out;
   }
   `
export const StyledFooterMainBtnContentBtnButtonAGithub = styled.a`
   text-decoration: none;
   transition: all .5s ease-in-out;
   color: ${colors.colorWhite};   

   &:hover {
      color: ${colors.colorGithub};  
      transition: all .5s ease-in-out;
   }
`
export const StyledFooterMainBtnContentBtnButtonALinkedin = styled.a`
   text-decoration: none;
   transition: all .5s ease-in-out;
   color: ${colors.colorWhite};   

   &:hover {
      color: ${colors.colorLinkedin};  
      transition: all .5s ease-in-out;
   }
`
export const StyledFooterMainBtnContentBtnButtonATwitch = styled.a`
   text-decoration: none;
   transition: all .5s ease-in-out;
   color: ${colors.colorWhite};   

   &:hover {
      color: ${colors.colorTwitch};  
      transition: all .5s ease-in-out;
   }
`
