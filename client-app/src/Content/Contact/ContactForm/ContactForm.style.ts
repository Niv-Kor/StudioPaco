import styled, { css } from "styled-components";
import { AccentColor, NaturalColor } from "Utils/Theme";

const fieldStyle = css`
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid ${NaturalColor};
    border-radius: 4px;
    transition: .2s;
    
    &:focus, &:active {
        border-color: ${AccentColor};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin: 40px 0 0;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Label = styled.label`
    font-size: .75rem;
    color: #555;
`;

export const InputField = styled.input`
    ${fieldStyle};
    height: 30px;
    padding: 10px;
`;

export const TextArea = styled.textarea`
    ${fieldStyle};
    height: 100px;
    resize: none;
    padding: 10px;
`;