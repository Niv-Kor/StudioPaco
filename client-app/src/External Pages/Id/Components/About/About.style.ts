import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const Title = styled.h6`
    margin: 16px 0;
    font-size: 1.2rem;
    font-weight: 400;
`;

export const Text = styled.p`
    text-align: justify;
    
    & b {
        font-weight: 500;
    }
`;