import styled from 'styled-components';

const LogoWidth = 500;
const LogoRatio = .626;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${LogoWidth}px;
    height: ${LogoWidth * LogoRatio}px;

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