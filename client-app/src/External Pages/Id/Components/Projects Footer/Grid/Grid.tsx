import { FC } from "react";
import { Container } from "./Grid.style";

interface IGrid {
    projectName: string;
    imgSrc: string;
}

const Grid: FC<IGrid> = ({ projectName, imgSrc }) => (
    <Container
        href={`/projects/${projectName.toLowerCase()}`}
        target="_blank"
    >
        <img
            src={imgSrc}
            alt={imgSrc}
        />
    </Container>
);

export default Grid;