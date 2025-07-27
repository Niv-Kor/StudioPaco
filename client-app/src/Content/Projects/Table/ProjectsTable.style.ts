import styled, { css } from 'styled-components';
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

export const Layout = styled.div`
    --thumbnail-width: 140px;

    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(auto-fit, minmax(var(--thumbnail-width), 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    gap: 25px;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --thumbnail-width: 100px;
        align-content: space-evenly;
        grid-auto-rows: auto;
    `)}
`;

export const Item = styled.div`
    --cover-opacity: .4;
    --title-opacity: 0;
    
    display: flex;
    flex-direction: column;

    &:hover {
        --cover-opacity: .7;
        --title-opacity: 1;
    }

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --title-opacity: 1;
    `)}
`;

export const Title = styled.p`
    font-family: 'Futura';
    margin-bottom: 5px;
    font-size: 18px;
    opacity: var(--title-opacity);
    transition: .2s;
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    width: var(--thumbnail-width);
    height: calc(var(--thumbnail-width) * 2.14);
    cursor: pointer;
`;

export const ThumbnailCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: var(--cover-opacity);
    transition: .2s;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        opacity: 0;
    `)}
`;

export const Thumbnail = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;