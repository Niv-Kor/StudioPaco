import styled from "styled-components";
import { AccentColor } from "../../../../Utils/Theme";

const BOTTOM_PANEL_HEIGHT = 80;
const SIDE_PANEL_WIDTH = 15;

export const SidePanel = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: ${SIDE_PANEL_WIDTH}px;
    height: 100%;
    background-color: ${AccentColor};
`;

export const BottomPanel = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${BOTTOM_PANEL_HEIGHT}px;
    background-color: ${AccentColor};
`;

export const ContentContainer = styled.div`
    position: fixed;
    width: calc(100% - ${SIDE_PANEL_WIDTH}px);
    height: calc(100% - ${BOTTOM_PANEL_HEIGHT}px);
    left: ${SIDE_PANEL_WIDTH}px;
    top: 0;
    overflow: hidden;
`;