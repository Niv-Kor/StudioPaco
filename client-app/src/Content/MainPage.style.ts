import styled from 'styled-components';

const LogoWidth = 500;
const LogoRatio = .626;

export const SmallLogo = styled.img<{
    displayed: boolean;
}>`
    position: fixed;
    top: 20px;
    left: 35px;
    width: 320px;
    transition: .5s;
    z-index: 1000;
    
    ${({ displayed }) => displayed ? `
        transform: translateX(50px);
        pointer-events: all;
        cursor: pointer;
        opacity: 1;
    ` : `
        pointer-events: none;
        cursor: auto;
        opacity: 0;
    `};
`;

export const LogoWrapper = styled.div<{
    displayed: boolean;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${LogoWidth}px;
    height: ${LogoWidth * LogoRatio}px;
    opacity: ${({ displayed }) => displayed ? 1 : 0};
    z-index: -1;
    transition: .2s;

    & > * {
        position: absolute;
        width: ${LogoWidth}px;
    }
`;

export const LogoBackground = styled.img`
`;

export const LogoForeground = styled.img`
`;

export const LogoText = styled.img`
`;

export const LogoSubtextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 65px;
    left: 3px;
    font-size: 25px;
    gap: 16px;
`;

export const LogoSubtext = styled.span`
    font-family: 'Futura';
`;