import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(auto-fit, 140px);
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    gap: 25px;
    height: 100%;
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
    width: 140px;
    height: 300px;
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
`;

export const Thumbnail = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;