import styled, { css } from "styled-components";
import { DrawerState } from "Utils/types";
import { AccentColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS, NaturalColor } from "Utils/Theme";

export const Container = styled.div`
    position: relative;
`;

export const Drawer = styled.div<{
    state: DrawerState;
    available: boolean;
}>`
    display: flex;
    flex-direction: column;
    width: 140px;
    
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