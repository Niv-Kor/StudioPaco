import { IProjectData } from "../types";
import {
    Container
} from './ProjectInfo.style';

interface IProjectInfo {
    data: IProjectData;
}

const ProjectInfo: React.FC<IProjectInfo> = ({
    data
}) => {
    const {
        name,
        thumbnail,
        location,
        programma,
        entity,
        year
    } = data;

    return (
        <Container>

        </Container>
    );
}

export default ProjectInfo;