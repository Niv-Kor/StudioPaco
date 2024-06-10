import styled from 'styled-components';
import { AccentColor } from '../../Utils/Theme';
import { SocialDrawerState } from './types';

export const Drawer = styled.div<{
    state: SocialDrawerState;
}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background-color: ${AccentColor};
    transition: .2s;
    transform: translateX(-${({ state }) => {
        switch (state) {
            case SocialDrawerState.Closed: return 100;
            case SocialDrawerState.SemiOpen: return 80;
            case SocialDrawerState.Open: return 0;
        }
    }}%);
`;

export const DrawerNotch = styled.div<{

}>`
    height: 40px;
    transform: translateX(35px);
`;