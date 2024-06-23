import styled from "styled-components";
import { AccentColor, NaturalColor } from "Utils/Theme";
import { IProjectStripe } from "./ProjectStripe";

export const Stripe = styled.div<IProjectStripe>`
    height: 100%;
    width: ${({ width }) => width}px;
    margin-left: ${({ leftMargin }) => leftMargin ?? 0}px;
    background-color: ${({ hovered }) => hovered ? AccentColor : NaturalColor};
    translate: 0 -100%;
    transition:
        translate ${({ index }) => (index % 2 === 0) ? .4 : .6}s,
        background .2s;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('resources/Graphics/');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.5;
        z-index: 0;
        pointer-events: none;
    }

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
    transition: .4s;

    ${({ open }) => open && `
        position: fixed;
        background-color: ${AccentColor};
        width: 100%;
    `};
`;