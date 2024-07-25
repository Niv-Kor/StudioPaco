import { FC } from 'react';
import { IProjectCategory, IProjectData } from '../types';
import {
    Layout,
    Item,
    ThumbnailWrapper,
    ThumbnailCover,
    Thumbnail,
    Title
} from './ProjectsTable.style';

interface IProjectsTable {
    category: IProjectCategory;
    onSelection: (project: IProjectData) => void;
}

const ProjectsTable: FC<IProjectsTable> = ({
    category,
    onSelection
}) => {
    return (
        <Layout>
            {category.projects.map(project => (
                <Item onClick={() => onSelection(project)}>
                    <Title>.{project.name}</Title>
                    <ThumbnailWrapper>
                        <Thumbnail src={project.thumbnail} alt={project.name} />
                        <ThumbnailCover />
                    </ThumbnailWrapper>
                </Item>
            ))}
        </Layout>
    );
}

export default ProjectsTable;