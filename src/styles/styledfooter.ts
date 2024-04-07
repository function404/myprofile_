import styled from "styled-components";
import { colors } from '^/app/utils/colors';

export const StyledFooter = styled.footer`
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   background: radial-gradient(at 100% 90%, rgba(0, 194, 204, .3), transparent 50%), radial-gradient(at 0% 100%, rgba(0, 194, 204, .3), transparent 50%);
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
   padding: 10px 20px;
`
export const StyledFooterMainBtnContentBtnButtonA = styled.a`
   text-decoration: none;
   transition: all .5s ease-in-out;
   color: ${colors.colorWhite};   

   &:hover {
      color: ${colors.colorPrimary};  
      transition: all .5s ease-in-out;
   }
`
