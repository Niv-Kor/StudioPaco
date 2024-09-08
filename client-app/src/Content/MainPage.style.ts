import styled, { keyframes, css } from 'styled-components';
import { mediaQueryMinWidth, mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

const LOGO_RATIO = .626;

const logoTextEnterAnimation = (startOffset: number, endOffset: number) => keyframes`
    from {
        clip-path: inset(0 calc(100% - ${startOffset}px) 0 0);
        opacity: 1;
    }

    to {
        clip-path: inset(0 calc(100% - ${endOffset}px) 0 0);
        opacity: 1;
    }
`;

const logoTextCursorEnterAnimation = keyframes`
    0% {
        opacity: 1;
    }

    19.9% {
        opacity: 1;
    }

    20% {
        opacity: 0;
    }

    39.9% {
        opacity: 0;
    }

    40% {
        opacity: 1;
    }

    59.9% {
        opacity: 1;
    }

    60% {
        opacity: 0;
    }

    79.9% {
        opacity: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
`;

const logoTextCursorMoveAnimation = (startOffset: number, endOffset: number) => keyframes`
    0% {
        left: ${startOffset}px;
        opacity: 1;
    }
        
    99% {
        left: ${endOffset}px;
        opacity: 1;
    }

    100% {
        left: ${endOffset}px;
        opacity: 0;
    }
`;

export const SmallLogo = styled.img<{
    displayed: boolean;
}>`
    position: fixed;
    top: 20px;
    left: 20px;
    width: 320px;
    transition: .5s;
    transform: translateX(-50px);
    z-index: 1000;
    
    ${({ displayed }) => displayed ? `
        transform: translateX(0);
        pointer-events: all;
        cursor: pointer;
        opacity: 1;
    ` : `
        pointer-events: none;
        cursor: auto;
        opacity: 0;
    `};
`;

export const SmallTextLogoContainer = styled.div`
`;

export const SmallTextLogo = styled(SmallLogo)<{
    displayed: boolean;
}>`
    opacity: 0;

    ${({ displayed }) => displayed && mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        clip-path: unset;
        opacity: 1;
    `)}

    ${({ displayed }) => displayed && mediaQueryMinWidth(MOBILE_BREAKPOINTS.MD, css`
        animation-name: ${() => logoTextEnterAnimation(140, 320)};
        animation-duration: 2s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    `)}
`

export const LogoWrapper = styled.div<{
    displayed: boolean;
}>`
    --logo-width: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--logo-width);
    height: calc(var(--logo-width) * ${LOGO_RATIO});
    opacity: ${({ displayed }) => displayed ? 1 : 0};
    z-index: -1;
    transition: .2s;

    & > * {
        position: absolute;
        width: var(--logo-width);
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --logo-width: 350px;
    `)}

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.SM, css`
        --logo-width: 250px;
    `)}
`;

export const LogoBackground = styled.img`
`;

export const LogoForeground = styled.img`
`;

export const LogoText = styled.img`
`;

export const LogoSubtextWrapper = styled.div`
    position: absolute;
    bottom: 65px;
    left: 3px;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        left: 4px;
        bottom: 30px;
    `)}

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.SM, css`
        display: none;
    `)}
`;

export const LogoSubtextContainer = styled.div<{
    displayed: boolean;
}>`
    --animation-start-offset: 130;
    

    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    gap: 16px;
    opacity: 0;

    ${({ displayed }) => displayed && mediaQueryMinWidth(MOBILE_BREAKPOINTS.MD, css`
        animation-name: ${logoTextEnterAnimation(130, 370)};
        animation-duration: 2.5s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    `)}
`;

export const LogoSubtext = styled.span`
    font-family: 'Futura';
`;

export const LogoSubtextCursor = styled.div<{
    displayed: boolean;
    startOffset: number;
    endOffset: number;
    top: number;
    moveDuration: number;
}>`
    position: absolute;
    top: ${({ top }) => top}px;
    left: ${({ startOffset }) => startOffset}px;
    width: 2px;
    height: 25px;
    background-color: black;
    opacity: 0;

    ${({ displayed, startOffset, endOffset, moveDuration }) => displayed && mediaQueryMinWidth(MOBILE_BREAKPOINTS.MD, css`
        animation-name: ${logoTextCursorEnterAnimation}, ${() => logoTextCursorMoveAnimation(startOffset, endOffset)};
        animation-duration: 2s, ${moveDuration}s;
        animation-delay: 0s, 2s;
        animation-fill-mode: forwards, forwards;
        animation-timing-function: linear, linear;
    `)}
`;