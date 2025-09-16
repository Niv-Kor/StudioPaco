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

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        display: flex;
        flex-direction: column;
    `)}
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

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --padding: 20px;
        position: static;
        width: 100%;
        margin-top: 30px;
        padding-left: 20px;
        box-sizing: border-box;
    `)}
`;

export const ContentContainer = styled.div<{
    rtl: boolean;
}>`
    display: flex;
    align-items: ${({ rtl }) => rtl ? "flex-end" : "flex-start"};
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    padding: 115px 0;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        overflow-y: auto;
        padding: 0;
    `)}
`;

const Text = styled.p`
    margin: 0;
    width: 80%;
    font-size: 20px;
    transition: .5s;
`;

export const Title = styled.span`
    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        display: flex;
        gap: 10px;
        position: fixed;
        top: 120px;
    `)}
`;

export const TitleText = styled(Text)<{
    displayed: boolean;
    fullHeight: boolean;
    rtl?: boolean;
}>`
    height: auto;
    opacity: ${({ displayed }) => displayed ? 1 : 0};

    & .category-title {
        font-size: 24px;
        font-weight: 500;
    }

    ${({ rtl }) => rtl && `
        padding-right: 20px;
        direction: rtl;
    `};

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        display: flex;
        flex-direction: column;
        gap: 10px;
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
    width: 16px;
`;

export const MobileMask = styled.div<{
    open: boolean;
    height: number;
}>`
    width: 100%;
    height: ${({ height }) => height}px;
    z-index: 15;
    background-color: ${AccentColor};
`;