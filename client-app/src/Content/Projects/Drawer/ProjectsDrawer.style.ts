import styled, { css, keyframes } from 'styled-components';
import { DrawerEnterTime } from 'Utils/constants';
import { Projects } from '../data';
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

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
    transition: transform ${DrawerEnterTime}s;
    
    ${({ selected }) => selected ? `
        transform: translateX(10px);
        font-weight: 500;
    ` : `
        &:hover {
            transform: translateX(10px);
        }
    `}
`;

const delimiterKeyframes = keyframes`
    from { height: 0; }
    to { height: ${Projects.length * 34}px; }
`;

export const ListDelimiter = styled.div<{
    displayed: boolean;
}>`
    position: absolute;
    top: 125px;
    left: 250px;
    width: 1px;
    background-color: #00000066;
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

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        display: none;
    `)}
`;

export const StripsContainer = styled.div<{
    width: number;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${({ width }) => width}px;
    height: 100%;
    transition: ${DrawerEnterTime}s;
`;