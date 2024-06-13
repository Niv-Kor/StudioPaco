import styled from "styled-components";
import { DrawerEnterTime } from "Utils/constants";

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
    width: 50%;
    height: 100%;
    opacity: 0;
    transform: translateX(-100%);
    transition: ${DrawerEnterTime}s;

    ${({ open }) => open && `
        opacity: 1;
        transform: translateX(0);
    `}
`;

export const CategoriesList = styled.ul`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding-top: 100px;
    gap: 6px;

`;
    
export const Catergory = styled.span<{
    selected: boolean;
}>`
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 100;
    transition: ${DrawerEnterTime}s;

    ${({ selected }) => selected ? `
        transform: translateX(10px);
        font-weight: bold;
        text-shadow: 1px 1px 0 #fff;
        color: #000;
    ` : `
        &:hover {
            transform: translateX(10px);
        }
    `}
`;

export const StripedContainer = styled.div<{
    width: number;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${({ width }) => width}px;
    height: 100%;
    transition: ${DrawerEnterTime}s;
`;