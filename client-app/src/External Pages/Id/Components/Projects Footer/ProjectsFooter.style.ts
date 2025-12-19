import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    height: 40px;
`;

export const GridMap = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    box-sizing: border-box;
    gap: 8px;
    padding: 0 8px;
    margin-bottom: 8px;
    width: 100%;
`

export const Grid = styled.div`
    width: 100%;
    height: 180px;
    background-color: aquamarine;
`;