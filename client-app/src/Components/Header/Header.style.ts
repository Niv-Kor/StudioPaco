import styled, { css } from "styled-components";
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 10px 20px 20px 0;
    box-sizing: border-box;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        gap: 10px;
    `)}

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.SM, css`
        gap: 0;
    `)}
`;