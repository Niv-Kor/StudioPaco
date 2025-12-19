import styled, { css } from "styled-components";
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from "../../../../Utils/Theme";

const LOGO_RATIO = .626;

export const Container = styled.div`
    --logo-width: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: var(--logo-width);
    height: calc(var(--logo-width) * ${LOGO_RATIO});
    margin: 20px 0 0 -3px;
    z-index: -1;
    transition: .2s;

    & > * {
        position: absolute;
        width: var(--logo-width);
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --logo-width: 350px;
    `)}

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.SM, css`
        --logo-width: 300px;
    `)}
`;