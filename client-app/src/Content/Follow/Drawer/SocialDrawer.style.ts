import styled, { css } from 'styled-components';
import { AccentColor, BackgroundColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';
import { DrawerState } from 'Utils/types';

export const Drawer = styled.div<{
    state: DrawerState;
    available: boolean;
    revertMode: boolean;
}>`
    width: 80px;
    height: 100%;
    background-color: ${({ revertMode }) => revertMode ? BackgroundColor : AccentColor};
    
    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        width: 50px;
    `)}
`;

export const DrawerList = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 60px;
    left: -25px;
    gap: 10px;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        left: -53px;
        gap: 7px;
        bottom: 40px;
    `)}
`;

export const DrawerNotch = styled.div`
    height: 40px;
    transform: translateX(35px);
`;