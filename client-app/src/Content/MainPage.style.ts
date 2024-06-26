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
    opacity: ${({ displayed }) => displayed ? 1 : 0};
    transition: .5s;
    z-index: 1000;
    
    ${({ displayed }) => !displayed && `
        transform: translateX(50px);
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