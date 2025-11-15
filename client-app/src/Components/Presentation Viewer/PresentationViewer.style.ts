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

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`;

export const DocumentContainer = styled.div`
    width: 100%;
`;

export const ButtonsLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    height: 100%;
    gap: 20px;
    padding-bottom: 1px;
`;

export const PageNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    font-size: 1rem;
    color: black;
    background: #ffffff66;
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