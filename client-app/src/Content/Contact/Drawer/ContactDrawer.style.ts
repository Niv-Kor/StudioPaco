import styled, { keyframes, css } from "styled-components";
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from "Utils/Theme";

export const Container = styled.div<{
    open: boolean;
}>`
    position: absolute;
    top: -150%;
    left: 20px;
    opacity: 0;
    transform: translateY(0);
    transition: opacity .1s, transform .2s;

     ${({ open }) => open ? `
        opacity: 1;
        transform: translateY(-50%);
        pointer-events: all;
     ` : `
        pointer-events: none;
     `}

     ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        z-index: 100;
    `)}
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
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

export const ListRowHebrew = styled(ListRow)`
    font-family: 'ArbelHagildaMenukad', 'Futura';
`;

export const ListRowEnglish = styled(ListRow)`
    font-family: 'Futura';
`;

const FadeFromLeft = keyframes`
    from { width: 0% }
    to { width: 100% }
`;

export const Delimiter = styled.hr<{
    open: boolean;
}>`
    width: 0%;

    ${({ open }) => open && css`
        animation-name: ${FadeFromLeft};
        animation-duration: .2s;
        animation-delay: .2s;
        animation-fill-mode: forwards;
    `}
`;

export const MobileBackground = styled.div<{
    displayed: boolean;
}>`
    position: fixed;
    transition: .3s;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 38%;
    opacity: 0;
    background-color: #ffffffbf;
    pointer-events: none;

    ${({ displayed }) => displayed && mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        opacity: 1;
        z-index: 50;
    `)}
`;