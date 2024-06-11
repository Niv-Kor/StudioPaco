import styled from "styled-components";
import { AccentColor, BackgroundColor } from '../../Utils/Theme';

export const Button = styled.button<{
    revertMode: boolean;
}>`
    position: relative;
    min-width: 100px;
    height: 40px;
    outline: none;
    border:  none;
    cursor: pointer;
    font-size: 1.15rem;
    background: none;
    z-index: 10;
    
    &::before {
        content: '';
        background-color: transparent;
        transition: background-color .2s;
    }
    
    &:hover {
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60%; 
            height: 30%;
            background-color: ${({ revertMode }) => revertMode ? BackgroundColor : AccentColor};
            z-index: -1;
        }
    }
`;