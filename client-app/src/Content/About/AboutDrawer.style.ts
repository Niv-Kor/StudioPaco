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
    padding-left: 27%;
    width: 660px;
    z-index: 20;
`;

export const TextContainer = styled.div<{
    open: boolean;
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
`;

export const Content = styled.div<{
    screenWidth: number;
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    transform: scale(${({ screenWidth }) => screenWidth / 1900});
    padding: 14vh 2vw;
    gap: 20px;
`;

export const LogoForeground = styled.img`
    position: absolute;
    top: 30%;
    width: 500px;
`;