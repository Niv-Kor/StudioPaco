import styled, { css } from 'styled-components';
import { AccentColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS, NaturalColor } from 'Utils/Theme';
import { IProjectStrip } from './ProjectStrip';
import { IProjectCategory } from '../types';

export const Strip = styled.div<IProjectStrip & IProjectCategory>`
    height: 100%;
    width: ${({ width }) => width}px;
    margin-left: ${({ stripLeftMargin }) => stripLeftMargin ?? 0}px;
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
    transform: scaleX(0);
    transform-origin: right;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
    transition: .4s;

    ${({ open }) => open && `
        position: fixed;
        background-color: ${AccentColor};
        transform: scaleX(1);
        opacity: 1;
        transition: .8s;
    `};
`;

export const ContentWrapper = styled.div<{
    offset: number;
}>`
    --padding: ${({ offset }) => offset + 280}px;

    position: absolute;
    height: 100%;
    left: var(--padding);
    width: calc(100% - var(--padding));
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    pointer-events: all;

    &::-webkit-scrollbar {
        display: none;
    }

    ${({ offset }) => mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        left: ${offset + 60}px;
        width: calc(100% - 100px);
    `)}
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    padding: 115px 0;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        overflow-y: auto;
    `)}
`;

const Text = styled.p`
    font-family: 'Futura', sans-serif;
    margin: 0;
    width: 80%;
    font-size: 20px;
    transition: .5s;
`;

export const TitleText = styled(Text)<{
    displayed: boolean;
    fullHeight: boolean;
}>`
    --minimal-height: 45%;

    height: auto;
    opacity: ${({ displayed }) => displayed ? 1 : 0};

    & .category-title {
        font-size: 24px;
        font-weight: 500;
        margin-right: 15px;
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --minimal-height: 35%;
        width: 100%;
    `)}
`;

export const BodyText = styled(Text)`
    margin-top: 50px;
`;

export const ContentElementContainer = styled.div`
    bottom: 0;
    width: 100%;
    z-index: 44100;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        position: static;
    `)}
`;

export const BackButtonIcon = styled.img`
    position: absolute;
    top: 4px;
    left: -40px;
    width: 24px;
`;