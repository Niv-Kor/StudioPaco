import styled from "styled-components";

const ratio = 1.6;

export const Wrapper = styled.div<{
    width: number;
}>`
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ width }) => width / ratio}px;
    outline: 1px solid #00000066;
    margin-left: 1px;
    background-color: white;
`;

export const Container = styled.div`
    position: relative;
    height: 100%;
    direction: rtl;
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 20;
`;

export const PageLabelContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: #000000aa;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 20;
`;

export const Button = styled.button`
    font-size: 1.5rem;
    outline: none;
    border: none;
    border-radius: 50%;
    color: white;
    width: 40px;
    height: 40px;
    background: #000000aa;
    padding-bottom: 3px;
    cursor: pointer;
    transition: .1s;
    
    &:hover {
        background-color: #000000cc;
    }
`;