import styled from "styled-components";
import { DrawerEnterTime } from "Utils/constants";
import ProfileImgSrc from 'resources/Graphics/About/Amit-BW.png';
import {
    AccentColor,
    mediaQueryMinWidth,
    mediaQueryMaxWidth,
    MOBILE_BREAKPOINTS,
    NaturalColor
} from "Utils/Theme";

export const Wrapper = styled.div<{
    open: boolean;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
    z-index: 50;
`;

export const ScrollWrapper = styled.div<{
    open: boolean;
}>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-image: url(${ProfileImgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left bottom;
    box-sizing: border-box;
    transition: .2s;

    ${({ open }) => !open && `
        transform: translateY(-100%);
    `}
`;

export const HeaderMask = styled.div<{
    open: boolean;
}>`
    ${({ open }) => mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
        position: fixed;
        top: 0;
        width: 100%;
        height: ${open ? 120 : 0}px;
        background-color: ${AccentColor};
        transition: .2s;
    `)}
`;

export const HeaderBackground = styled.div`
    width: 100%;
    height: 62%;
    background-color: ${AccentColor};
`;

export const Paragraph = styled.p<{
    zIndex?: number;
}>`
    width: 835px;
    margin: 0;
    text-align: justify;
    font-size: 24px;
    font-weight: 400;
    z-index: ${({ zIndex }) => zIndex || 20};
    transition: font-size .2s;

    & > b {
        font-weight: 500;
    }
`;

export const CenterParagraph = styled(Paragraph)`
    padding-left: 300px;
    margin: 120px 0 80px;
    z-index: 20;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
        padding-left: 45px !important;
        width: calc(100% - 45px) !important;
        margin-top: 20px;
        margin-bottom: 100%;
    `)}
`;

export const TextContainer = styled.div<{
    open: boolean;
    closing: boolean;
}>`
    position: fixed;
    top: 0;
    right: 0;
    width: 62%;
    height: 100%;
    font-family: 'Futura';
    background-color: ${AccentColor};
    transform: translateX(${({ open }) => open ? 0 : 100}%);
    transition: ${DrawerEnterTime}s;

    ${({ closing }) => closing && `
        transform: translateX(100%);
    `}

    @media (max-width: 1400px) {
        min-width: 868px;
    }

    ${({ open }) => mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
        position: absolute;
        width: 100%;
        height: 100%;
        top: -38%;
        transform: translateY(${open ? 0 : -100}%);
    `)}
`;

export const ProfileImage = styled.img<{
    open: boolean;
}>`
    position: fixed;
    left: 100%;
    bottom: 14%;
    width: 38%;
    background-color: ${NaturalColor};
    transition: ${DrawerEnterTime}s;

    @media (max-width: 1400px) {
        min-width: 532px;
    }

    ${({ open }) => open && mediaQueryMinWidth(MOBILE_BREAKPOINTS.MD, `
        left: 0;
        transition: left ${DrawerEnterTime * 2}s;
    `)}

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    `)}
`;

export const Content = styled.div<{
    displayed: boolean;
    screenWidth: number;
    screenHeight: number;
}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    left: 0;
    bottom: 14%;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    transform: scale(${({ screenWidth, screenHeight }) => {
        const minScreenHeight = 700;
        const referenceHeight = 832;
        const minScreenWidth = 1300;
        const referenceWidth = 1900;
        const scaleAtMin = .8;
        const adjustedWidth = Math.max(screenWidth, minScreenWidth);
        const adjustedHeight = Math.max(screenHeight, minScreenHeight);
        const scalebyWidth = scaleAtMin + (adjustedWidth - minScreenWidth) / (referenceWidth - minScreenWidth) * (1 - scaleAtMin);
        const scalebyHeight = scaleAtMin + (adjustedHeight - minScreenHeight) / (referenceHeight - minScreenHeight) * (1 - scaleAtMin);
        return Math.min(scalebyWidth, scalebyHeight);
    }});
    transform-origin: bottom left;
    padding-left: 2%;

    ${({ displayed }) => mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, `
        position: absolute;
        justify-content: flex-start;
        padding: 60px 20px 0 20px;
        width: 100%;
        height: 62%;
        top: 65px;
        transform: scale(1);
        opacity: ${displayed ? 1 : 0};
        transition: opacity .75s;

        & ${Paragraph} {
            font-size: .9rem;
            width: 100%;
        }

        & ${Paragraph}:nth-last-child(1) {
            padding-bottom: 80px;
        }
    `)}
`;