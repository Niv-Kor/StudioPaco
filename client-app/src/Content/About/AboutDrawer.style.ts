import styled from "styled-components";
import { DrawerEnterTime } from "Utils/constants";
import { AccentColor, NaturalColor } from "Utils/Theme";

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
`

export const Paragraph = styled.p`
    width: 835px;
    margin: 0;
    text-align: justify;
    font-size: 24px;
    font-weight: 400;
    z-index: 20;
    transition: font-size .2s;

    & > b {
        font-weight: 500;
    }
`;

export const CenterParagraph = styled(Paragraph)`
    padding-left: 300px;
    margin: 120px 0 80px;
    width: 660px;
    z-index: 20;
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

    ${({ open }) => open && `
        left: 0;
        transition: left ${DrawerEnterTime * 2}s;
    `}

    @media (max-width: 1400px) {
        min-width: 532px;
    }
`;

export const Content = styled.div<{
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
`;

export const LogoForeground = styled.img`
    position: absolute;
    bottom: 130px;
    left: 0;
    width: 500px;
`;