import styled, { css } from 'styled-components';
import { mediaQueryMaxWidth, MOBILE_BREAKPOINTS } from 'Utils/Theme';

export const Layout = styled.div`
    --thumbnail-width: 140px;
    --max-row-items: 6;
    --gap: 25px;

    display: grid;
    align-content: center;
    margin: auto;
    grid-template-columns: repeat(auto-fit, var(--thumbnail-width));
    max-width: calc(var(--max-row-items) * var(--thumbnail-width) + (var(--max-row-items) - 1) * var(--gap));
    grid-template-rows: 1fr;
    place-content: center;
    gap: var(--gap);

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        --max-row-items: 1;
        --thumbnail-width: 100%;
        align-content: space-evenly;
        grid-auto-rows: auto;
        overflow: hidden;
        gap: 5px;
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
        align-items: flex-end;
    `)}
`;

export const Title = styled.p`
    margin-bottom: 5px;
    font-size: 18px;
    opacity: var(--title-opacity);
    transition: .2s;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        margin-right: 10px;
    `)}
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
    width: 100%;
    height: 100%;

    ${mediaQueryMaxWidth(MOBILE_BREAKPOINTS.MD, css`
        border-radius: 5px;
    `)}
`;