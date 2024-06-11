import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const ListWrapper = styled.div`
    width: 50%;
    height: 100%;
`;

export const CategoriesList = styled.ul<{
    open: boolean;
}>`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding-top: 100px;
    gap: 6px;
`;
    
export const Catergory = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 100;
    transition: .2s;

    &:hover {
        transform: translateX(10px);
    }
`;

export const StripedContainer = styled.div<{
    open: boolean;
    width: number;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: ${({ width }) => width}px;
    height: 100%;
    transition: .2s;
`;