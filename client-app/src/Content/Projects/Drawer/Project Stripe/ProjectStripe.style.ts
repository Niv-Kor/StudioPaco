import styled from "styled-components";
import { AccentColor, NaturalColor } from "Utils/Theme";
import { IProjectStripe } from "./ProjectStripe";

export const Stripe = styled.div<IProjectStripe>`
    height: 100%;
    width: ${({ width }) => width}px;
    margin-left: ${({ leftMargin }) => leftMargin ?? 0}px;
    background-color: ${({ hovered }) => hovered ? AccentColor : NaturalColor};
    transform: translateY(-100%);
    transition: transform ${({ index }) => (index % 2 === 0) ? .4 : .6}s;

    ${({ enabled }) => enabled && `
        opacity: 1;
        transform: translateY(0);
    `}
`;

export const Container = styled.div<{
    open: boolean;
    rightOffset: number;
}>`
    position: fixed;
    width: 0%;
    height: 100%;
    transition: 0s;

    ${({ open, rightOffset }) => open && `
        position: fixed;
        right: ${rightOffset}px;
        width: 100%;
        background-color: ${AccentColor};
        z-index: -1;
        transition: .4s;
    `};
`;