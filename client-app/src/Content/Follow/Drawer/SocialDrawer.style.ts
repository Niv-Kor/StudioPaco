import styled from 'styled-components';
import { AccentColor, BackgroundColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';
import { SocialDrawerState } from '../types';

export const Drawer = styled.div<{
    state: SocialDrawerState;
    available: boolean;
    revertMode: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background-color: ${({ revertMode }) => revertMode ? BackgroundColor : AccentColor};
    transition: .2s;
    z-index: 50;
    pointer-events: ${({ available }) => available ? 'all' : 'none'};
    transform: translateX(-${({ state }) => {
        switch (state) {
            case SocialDrawerState.Closed: return 100;
            case SocialDrawerState.SemiOpen: return 80;
            case SocialDrawerState.Open: return 0;
        }
    }}%);
    
    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
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

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
        left: -53px;
        gap: 7px;
        bottom: 40px;
    `)}
`;

export const DrawerNotch = styled.div`
    height: 40px;
    transform: translateX(35px);
`;