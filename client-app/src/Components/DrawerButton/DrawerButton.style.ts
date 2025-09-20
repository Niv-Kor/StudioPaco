import styled, { css } from "styled-components";
import { IDrawerContainer } from "./types";
import { DrawerState } from "Utils/types";

export const Container = styled.div`
    position: relative;
`;

export const DrawerWrapper = styled.div< {
    state: DrawerState
} & IDrawerContainer>`
    & > * {
        ${({ position }) => position !== undefined && css`
            position: ${position};
        `};
            
        ${({ top }) => top !== undefined && css`
            top: ${top}px;
        `};

        ${({ right }) => right !== undefined && css`
            right: ${right}px;
        `};

        ${({ left }) => left !== undefined && css`
            left: ${left}px;
        `};
        
        ${({ bottom }) => bottom !== undefined && css`
            bottom: ${bottom}px;
        `};
        
        ${({ translateX, state }) => translateX !== undefined && css`
            transform: translateX(${translateX[state]});
        `};

        ${({ translateY, state }) => translateY !== undefined && css`
            transform: translateY(${translateY[state]});
        `};
        
        z-index: 99;
        opacity: ${({ state }) => state !== DrawerState.Closed ? 1 : 0};
        pointer-events: ${({ state }) => state === DrawerState.Open ? "all" : "none"};
        transition: all .2s, opacity .2s, transform .2s;

        ${({ state }) => state === DrawerState.Open && css`
            transition: transform .6s;
        `};
    }
`;

export const BackgroundMask = styled.div<{
    displayed: boolean;
}>`
    --blur: ${({ displayed }) => displayed ? 10 : 0}px;
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(var(--blur));
    -webkit-backdrop-filter: blur(var(--blur));
    pointer-events: none;
    z-index: 98;
    transition: .2s;
`;