import styled, { css } from 'styled-components';
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

export const Wrapper = styled.div<{
    enabled: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    pointer-events: ${({ enabled }) => enabled ? 'all' : 'none'};
    opacity: ${({ enabled }) => enabled ? 1 : 0};
    transition: .2s;
`;

export const IconContainer = styled.div`
    display: flex;
    height: 40px;
    cursor: pointer;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        height: 25px;
    `)}
`;

export const Icon = styled.img`
    width: 30px;
`;

export const ValueContainer = styled.div<{
    hovered: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-20%);
    transition: opacity .2s, transform .2s;

    ${({ hovered }) => hovered && `
        opacity: 1;
        transform: translateX(0);
        cursor: pointer;
        pointer-events: all;
    `};
`;

export const ValueLabel = styled.span`
    white-space: nowrap;
    font-family: 'Futura';
    font-size: 1.25rem;
    font-weight: 400;
`;

export const ClipboardIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const ClipboardAck = styled.span`
    font-family: 'Futura';
    font-size: 1rem;
    font-weight: 400;
`;