import styled, { css } from "styled-components";
import { SocialDrawerState } from "../../Follow/types";
import { AccentColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS, NaturalColor } from "Utils/Theme";

export const Container = styled.div`
    position: relative;
`;

export const Drawer = styled.div<{
    state: SocialDrawerState;
    available: boolean;
}>`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 8px;
    width: 140px;
    z-index: 50;
    transition: .2s;
    opacity: ${({ available, state }) => (available || state === SocialDrawerState.SemiOpen) ? 1 : 0};
    pointer-events: ${({ available }) => available ? 'all' : 'none'};
    transform: translateY(${({ state }) => {
        switch (state) {
            case SocialDrawerState.Closed: return "calc(100% + 10px)";
            case SocialDrawerState.SemiOpen: return "100%";
            case SocialDrawerState.Open: return "-54px";
        }
    }});
    
    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        width: 50px;
    `)}
`;

export const Header = styled.div`
    width: calc(100% + 22px);
    height: 10px;
    background-color: ${AccentColor};
`;

export const SelectOption = styled.div<{
    index: number;
}>`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    border-bottom-width: ${({ index }) => (index > 0) ? 1 : 0}px;
    background-color: #ffffffcc;
    cursor: pointer;
    transition: .1s;
    
    &:hover {
        background-color: ${NaturalColor}cc;
    }
`;