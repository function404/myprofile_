import styled from 'styled-components';

import { IIconLinkProps } from '^/app/data/Icons/IconsData.types';

import { colors } from '^/theme/Colors/Colors';

export const StyledFooter = styled.footer`
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   background: radial-gradient(at 100% 90%, ${colors.colorBgScrollbar}, transparent 50%), radial-gradient(at 0% 100%, ${colors.colorBgScrollbar}, transparent 50%);
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
   gap: 35px;   
`
export const IconLink = styled.a<IIconLinkProps>`
   color: ${props => props.color};
   transition: all .5s ease-in-out;

   &:hover {
      color: ${props => props.hoverColor};
      transform: scale(1.2);
   }
`