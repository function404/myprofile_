
import styled, { createGlobalStyle } from 'styled-components';

import { colors } from '^/app/utils/colors';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

&::-webkit-scrollbar {
    width: 10px;
}

&::-webkit-scrollbar-track {
    background: ${colors.colorBgScrollbar};
}

&::-webkit-scrollbar-thumb {
    background: ${colors.colorPrimaryImg};
    border-radius: 12px;
}
`;
export const StyledHtml = styled.html`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: ${colors.colorBlack};
    scroll-behavior: smooth;
`
export const StyledBody = styled.body`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: ${colors.colorBlack};
    scroll-behavior: smooth;
`
export const StyledContainerIndex = styled.div`
    background: radial-gradient(at 0% 0%, rgba(0, 194, 204, .3), transparent 50%),
                radial-gradient(at 100% 50%, rgba(0, 194, 204, .2), transparent 50%),
                radial-gradient(at 0% 100%, rgba(0, 194, 204, .3), transparent 50%),
                radial-gradient(at 100% 50%, rgba(0, 194, 204, .2), transparent 50%);
`
export const StyledLoading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
`
