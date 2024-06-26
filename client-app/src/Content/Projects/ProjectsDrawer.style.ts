import styled, { css, keyframes } from 'styled-components';
import { DrawerEnterTime } from "Utils/constants";
import { Projects } from './constants';
import { AccentColor, NaturalColor } from 'Utils/Theme';

export const Wrapper = styled.div<{
    open: boolean;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
`;

export const ListWrapper = styled.div<{
    open: boolean;
}>`
    display: flex;
    flex-direction: row;
    height: 100%;
    opacity: 0;
    padding-top: 100px;
    transform: translateX(-100%);
    transition: ${DrawerEnterTime * 2}s;
    z-index: 20;

    ${({ open }) => open && `
        opacity: 1;
        transform: translateX(0);
    `}
`;

export const CategoriesList = styled.ul`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 6px;
`;
    
export const Category = styled.span<{
    selected: boolean;
}>`
    font-family: 'Futura';
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 100;
    transition: ${DrawerEnterTime}s;

    ${({ selected }) => selected ? `
        transform: translateX(10px);

        &::before {
            content: '';
            display: inline-block;
            width: 5px;
            height: 5px;
            margin: 0 5px 2px -10px;
            background-color: #fff;
            border: 1px #000 outset;
            border-radius: 50%;
            transition: .2s;
        }
    ` : `
        &:hover {
            transform: translateX(10px);
        }
    `}

    &::before {
        
    }
`;

const delimiterKeyframes = keyframes`
    from { height: 0; }
    to { height: ${Projects.length * 34}px; }
`;

export const ListDelimiter = styled.div<{
    displayed: boolean;
}>`
    width: 1px;
    background-color: #00000066;
    margin: 20px 0 0 50px;
    height: 0;
    
    ${({ displayed }) => displayed ? css`
        animation-name: ${delimiterKeyframes};
        animation-fill-mode: forwards;
        animation-duration: .5s;
        animation-delay: 1s;
    ` : css`
        opacity: 0;
        transition: .5s;
    `}
`;

export const StripesContainer = styled.div<{
    width: number;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${({ width }) => width}px;
    height: 100%;
    transition: ${DrawerEnterTime}s;
`;