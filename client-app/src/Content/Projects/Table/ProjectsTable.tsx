import { FC } from 'react';
import { IProjectCategory } from '../types';
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
}

const ProjectsTable: FC<IProjectsTable> = ({ category }) => {
    return (
        <Layout>
            {category.projects.map(project => (
                <Item onClick={() => {}}>
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