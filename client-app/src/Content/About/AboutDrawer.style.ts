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
`

export const TextContainer = styled.div<{
    open: boolean;
}>`
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-color: ${AccentColor};
    transform: translateX(${({ open }) => open ? 0 : 100}%);
    transition: ${DrawerEnterTime}s;
`;

export const ProfileImage = styled.img<{
    open: boolean;
}>`
    position: fixed;
    left: 0;
    top: 20%;
    width: 40%;
    background-color: ${NaturalColor};
    transform: translateX(${({ open }) => open ? 0 : 250}%);
    transition: ${DrawerEnterTime}s;

    ${({ open }) => open && `
        transition: transform ${DrawerEnterTime * 2}s;
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

export const Paragraph = styled.p`
    width: 80%;
    font-size: 1.2rem;
`;

export const CenterParagraph = styled(Paragraph)`
    padding-left: 30%;
    width: 60%;
`;