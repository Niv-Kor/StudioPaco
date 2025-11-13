import styled, { css } from "styled-components";
import { ICollageGrid } from "./types";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100%;
    margin-top: 20px;
`;

export const MapContainer = styled.div<{
    scale: number;  
}>`
    position: relative;
    width: 700px;
    height: 600px;
    transform: scale(${({ scale }) => scale});
    transform-origin: center;
`;

export const Grid = styled.div<ICollageGrid>`
    position: absolute;
    left: ${({ x }) => x ?? 0}px;
    top: ${({ y }) => y ?? 0}px;
    width: ${({ width }) => width ?? 0}px;
    height: ${({ height }) => height ?? 0}px;
    overflow: hidden;
    opacity: 1;
    transition: 2s;

    ${({ color }) => color && css`
        background-color: ${color};
    `};
    
    &, & > * {
        &.transitioning {
            opacity: 0;
        }
    }
    
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: .5;
        transition: 2s;
    }
`;