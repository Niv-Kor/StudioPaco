import styled from "styled-components";
import { AccentColor, NaturalColor } from "Utils/Theme";
import { IProjectStrip } from "./ProjectStrip";
import { IProjectCategory } from "../types";

export const Strip = styled.div<IProjectStrip & IProjectCategory>`
    height: 100%;
    width: ${({ width }) => width}px;
    margin-left: ${({ leftMargin }) => leftMargin ?? 0}px;
    background-color: ${({ hovered }) => hovered ? AccentColor : NaturalColor};
    translate: 0 -100%;
    transition:
        translate ${({ index }) => (index % 2 === 0) ? .4 : .6}s,
        transform .2s,
        background .2s;

    ${({ enabled }) => enabled && `
        translate: 0 0;
    `}
`;

export const Container = styled.div<{
    open: boolean;
    rightOffset: number;
}>`
    position: fixed;
    right: ${({ rightOffset }) => rightOffset}px;
    width: 0;
    height: 100%;
    z-index: 10;
    opacity: 0;
    transition: .4s;

    ${({ open }) => open && `
        position: fixed;
        background-color: ${AccentColor};
        width: 100%;
        opacity: 1;
    `};
`;

export const ContentWrapper = styled.div<{
    offset: number;
}>`
    --padding: ${({ offset }) => offset + 280}px;

    position: absolute;
    top: 114px;
    bottom: 75px;
    left: var(--padding);
    width: calc(100% - var(--padding));
`;

export const Text = styled.p<{
    displayed: boolean;
    fullHeight: boolean;
}>`
    font-family: 'Futura';
    margin: 0;
    width: 80%;
    height: ${({ fullHeight }) => fullHeight ? 100 : 45}%;
    opacity: ${({ displayed }) => displayed ? 1 : 0};
    font-size: 20px;
    transition: .5s;

    & .category-title {
        font-size: 24px;
        font-weight: 500;
        margin-right: 15px;
    }
`;

export const ContentElementContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: 44100;
`;