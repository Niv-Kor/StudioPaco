import styled, { css, keyframes } from 'styled-components';
import { AccentColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';
import { DrawerState } from "Utils/types";

export const Container = styled.div<{
    state: DrawerState;
}>`
    display: flex;
    flex-direction: column;
    background-color: #ffffffee;
    padding: 16px;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        position: fixed;
        top: unset;
        left: 0;
        right: 0;
        width: 100%;
        padding: 0 15px;
        margin-bottom: 30px;
        box-sizing: border-box;
        z-index: 100;
    `)}
`;

export const HeaderBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${AccentColor};
    padding: 16px;
    transform: translateX(-16px);
    margin-bottom: 15px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        align-items: center;
    `)}
`;

export const ListRow = styled.span<{
    letterSpacing?: number;
}>`
    white-space: nowrap;
    font-size: 1.5rem;
    letter-spacing: ${({ letterSpacing }) => letterSpacing ?? 0}px;

    ${({ letterSpacing }) => mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        font-size: 1.275rem;
        letter-spacing: calc(${letterSpacing}px * .916);
    `)}
`;

const FadeFromLeft = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

export const Delimiter = styled.hr<{
    open: boolean;
}>`
    width: 0;

    ${({ open }) => open && css`
        animation-name: ${FadeFromLeft};
        animation-duration: .2s;
        animation-delay: .2s;
        animation-fill-mode: forwards;
    `}
`;