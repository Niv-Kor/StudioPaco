import styled from 'styled-components';
import { AccentColor, BackgroundColor } from 'Utils/Theme';
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
    pointer-events: ${({ available }) => available ? 'all' : 'none'};
    transform: translateX(-${({ state }) => {
        switch (state) {
            case SocialDrawerState.Closed: return 100;
            case SocialDrawerState.SemiOpen: return 80;
            case SocialDrawerState.Open: return 0;
        }
    }}%);
`;

export const DrawerList = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 60px;
    left: -40px;
    gap: 10px;
`;

export const DrawerNotch = styled.div<{

}>`
    height: 40px;
    transform: translateX(35px);
`;