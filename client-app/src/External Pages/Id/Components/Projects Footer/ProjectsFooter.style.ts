import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    gap: 40px;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 40px;
`;

export const WebsiteLink = styled.a`
    & > img {
        width: 40px;
    }
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
`;