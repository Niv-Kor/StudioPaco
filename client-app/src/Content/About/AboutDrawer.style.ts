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
    width: 80%;
    font-size: 1.2rem;
    z-index: 20;

    & > b {
        font-weight: 500;
    }
`;

export const CenterParagraph = styled(Paragraph)`
    padding-left: 30%;
    width: 60%;
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

    & ${Paragraph} {
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

export const ProfileImage = styled.img<{
    open: boolean;
}>`
    position: fixed;
    left: 100%;
    top: 20%;
    width: 38%;
    background-color: ${NaturalColor};
    transition: ${DrawerEnterTime}s;

    ${({ open }) => open && `
        left: 0;
        transition: left ${DrawerEnterTime * 2}s;
    `}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const LogoForeground = styled.img`
    position: absolute;
    top: 30%;
    width: 500px;
`;