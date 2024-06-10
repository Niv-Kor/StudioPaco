import styled from "styled-components";
import { AccentColor } from '../../Utils/Theme';

export const Button = styled.button`
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
            background-color: ${AccentColor};
            z-index: -1;
        }
    }
`;