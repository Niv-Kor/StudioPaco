import styled, { keyframes, css } from 'styled-components';
import { AccentColor, mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

export const Container = styled.div<{
    open: boolean;
}>`
    position: absolute;
    bottom: 45px;
    left: 15px;
    opacity: 0;
    background-color: #ffffffee;
    padding: 16px;
    transform: translateY(50%);
    transition: all .2s, opacity .1s, transform .2s;
    z-index: 1000;

    ${({ open }) => open ? `
       opacity: 1;
       transform: translateY(0);
       pointer-events: all;
    ` : `
       pointer-events: none;
    `}

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

export const BackgroundMask = styled.div<{
    displayed: boolean;
}>`
    --blur: ${({ displayed }) => displayed ? 10 : 0}px;
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(var(--blur));
    -webkit-backdrop-filter: blur(var(--blur));
    pointer-events: none;
    z-index: 99;
    transition: .2s;
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

export const MobileBackground = styled.div<{
    displayed: boolean;
}>`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 38%;
    opacity: 0;
    background-color: #ffffffbf;
    pointer-events: none;
    transition: .3s;

    ${({ displayed }) => displayed && mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        opacity: 1;
        z-index: 50;
    `)}
`;