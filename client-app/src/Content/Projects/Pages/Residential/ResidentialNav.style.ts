import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    height: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.p`
    font-family: 'Futura';
    margin-bottom: 5px;
    font-size: 18px;
`;

export const ThumbnailWrapper = styled.div`
    --cover-opacity: .4;

    position: relative;
    width: 140px;
    height: 300px;
    cursor: pointer;

    & * {
        border-radius: 8px;
    }

    &:hover {
        --cover-opacity: .7;
    }
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