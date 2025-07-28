import styled from "styled-components";
import { IScrollbar } from "./types";
import { AccentColor } from "../../Utils/Theme";

export const Bar = styled.div<IScrollbar>`
    position: fixed;
    width: ${({ width }) => width}px;
    height: ${({ height, isActive }) => isActive ? height : 0}px;
    right: ${({ x }) => x}px;
    top: ${({ y }) => y}px;
    background-color: color-mix(in srgb, ${AccentColor} 85%, black);;
    transition: height .5s ease;
`;