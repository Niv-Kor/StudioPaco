import styled, { css } from 'styled-components';
import { AccentColor, BackgroundColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';
import { BottomDetailsPanelWidth } from './consts';
import { RTLTextAlignClassName } from "../../../Utils/constants";

export const Container = styled.div<{
    open: boolean;
    offset: number;
}>` 
    --content-padding: 20px;
    --header-image-size: 53vw;

    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - ${({ offset }) => offset}px);
    height: 100%;
    background: ${BackgroundColor};
    opacity: 1;
    overflow: hidden auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    pointer-events: all;
    transition: .2s;

    ${({ open }) => !open && `
        opacity: 0;
        pointer-events: none;
    `}

    &::-webkit-scrollbar { 
        display: none;
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        left: unset;
        right: 0;
    `)}
`;

export const BackgroundLine = styled.div<{
    open: boolean;
}>`
    position: absolute;
    width: 10px;
    height: ${({ open }) => open ? 100 : 0}%;
    background-color: ${AccentColor};
    transition: .2s;
`;

export const HeaderImage = styled.img<{
    scrollPercent: number;
    overscroll: boolean;
}>`
    width: var(--header-image-size);
    margin-bottom: 100px;
    opacity: ${({ overscroll, scrollPercent }) => overscroll ? scrollPercent * .2 : 1};
    transition: .7s;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        width: 100%;
        margin-bottom: 10px;
        opacity: 1;
    `)}
`;

export const ImagesWrapper = styled.div<{
    rightOffset: number;
}>`
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    flex-wrap: wrap;
    width: 100%;
    gap: 60px;
    transition: .7s;

    & > img {
        max-width: calc(100vw - ${({ rightOffset }) => rightOffset}px - ${BottomDetailsPanelWidth}px);
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        gap: 10px;

        & > img {
            max-width: 100%;
            width: 100%;
        }
    `)}
`;

export const ContentContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const InfoParagraph = styled.div<{
    overscroll: boolean;
}>`
    --max-offset: calc(var(--header-image-size) + var(--content-padding));

    display: flex;
    flex-direction: column;
    position: fixed;
    width: 30%;
    top: 30%;
    left: ${({ overscroll }) => overscroll ? `calc(var(--content-padding) * 2)` : `var(--max-offset)`};
    font-size: 1.3rem;
    gap: 40px;
    pointer-events: none;
    transition: .7s;

    @media (max-width: 1400px) {
        font-size: 1rem;
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        position: static;
        margin: 0 0 10px 10px;
    `)}
`;

export const BackButtonWrapper = styled.div<{
    overscroll: boolean;
}>`
    --label-offset: 0;
    --padding: 20px;

    position: fixed;
    display: flex;
    flex-direction: row;
    top: var(--padding);
    left: calc(var(--header-image-size) + var(--padding));
    cursor: pointer;
    gap: 10px;
    font-size: 1.5rem;
    z-index: 4000;
    transition: .7s;

    ${({ overscroll }) => overscroll && `
        left: 35%;
        transform: translateX(-100%);
    `}

    &:hover {
        --label-offset: 10px;
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        position: absolute;
        top: 0;
        right: 20px;
        left: unset;
        font-size: 1rem;
        pointer-events: all;
    `)}
`;

export const BackButtonIcon = styled.img`
    width: 16px;
    margin-top: 2px;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        transform: rotateY(180deg);
    `)}
`;

export const BackButtonLabel = styled.span`
    margin-left: var(--label-offset);
    font-weight: 500;
    transition: .2s;
`;

export const ProjectInfoSection = styled.div<{
    rtl: boolean;
}>`
    display: flex;
    flex-direction: column;
    align-items: ${({ rtl }) => rtl ? "flex-end" : "flex-start"};
    position: relative;
`;

export const ProjectInfoRow = styled.p.attrs({
    className: RTLTextAlignClassName
})`
    margin: 0;
`;