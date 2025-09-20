import styled, { css, keyframes } from 'styled-components';
import { DrawerEnterTime } from 'Utils/constants';
import { Projects } from '../data';
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';
import { CategoryDelimiterSize } from '../constants';

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

    ${({ open }) => open && css`
        opacity: 1;
        transform: translateX(0);
    `}
`;

export const CategoriesList = styled.ul<{
    rtl?: boolean;
}>`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 6px;

    ${({ rtl }) => rtl && css`
        margin-left: 30px;
    `};
`;
    
export const Category = styled.span<{
    selected: boolean;
    margin?: string;
    rtl?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ rtl }) => rtl ? "flex-end" : "flex-start"};
    font-size: 1.5rem;
    cursor: pointer;
    gap: 5px;
    z-index: 100;
    transition: transform ${DrawerEnterTime}s, text-shadow .2s;

    ${({ margin }) => margin && css`
        margin: ${margin};
    `};
    
    ${({ selected, rtl }) => selected ? css`
        transform: translateX(${10 * (rtl ? -1 : 1)}px);
        text-shadow:
           .3px 0 rgba(0, 0, 0, .2),
           -.3px 0 rgba(0, 0, 0, .2),
           0 .3px rgba(0, 0, 0, .2),
           0 -.3px rgba(0, 0, 0, .2),
           .3px .3px rgba(0, 0, 0, .15),
           -.3px -.3px rgba(0, 0, 0, .15);
    ` : css`
        &:hover {
            transform: translateX(${10 * (rtl ? -1 : 1)}px);
        }
    `}
`;

const delimiterKeyframes = keyframes`
    from { height: 0; }
    to { height: ${Projects.length * 34 + CategoryDelimiterSize}px; }
`;

export const ListDelimiter = styled.div<{
    displayed: boolean;
    rtl?: boolean;
}>`
    position: absolute;
    top: 125px;
    left: 250px;
    width: 1px;
    background-color: #00000066;
    height: 0;

    ${({ rtl }) => rtl && css`
        left: 220px;
    `};
    
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

export const CategoryIcon = styled.img`
    width: 24px;
`;