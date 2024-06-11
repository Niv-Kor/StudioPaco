import { FC, useState } from 'react';
import { DefaultStripeSpace, DummyProjects, Projects, StripeWidth } from '../constants';
import ProjectStripe from './Project Stripe/ProjectStripe';
import {
    Wrapper,
    ListWrapper,
    CategoriesList,
    Catergory,
    StripedContainer
} from './ProjectsDrawer.style';

interface IProjectsDrawer {
    open: boolean;
}

const ProjectsDrawer: FC<IProjectsDrawer> = ({ open }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [hoveredCategory, setHoveredCategory] = useState<string>('');

    const isSelected = (stripeKey: string): boolean => selectedCategory === stripeKey;
    const isHovered = (stripeKey: string): boolean => hoveredCategory === stripeKey;

    return (
        <Wrapper>
            <ListWrapper>
                <CategoriesList open={open}>
                    {Projects.map(cat => (
                        <Catergory
                            onMouseEnter={() => setHoveredCategory(cat.key)}
                            onMouseLeave={() => setHoveredCategory('')}
                            onClick={() => setSelectedCategory(cat.key)}
                        >
                            {cat.key}
                        </Catergory>
                    ))}
                </CategoriesList>
            </ListWrapper>
            <StripedContainer
                open={open}
                width={Projects.length * DefaultStripeSpace}
            >
                {DummyProjects.map((project, index) => (
                    <ProjectStripe
                        width={StripeWidth}
                        selected={isSelected(project.key)}
                        hovered={isHovered(project.key) || isSelected(project.key) || index === 1}
                        leftMargin={project.leftMargin}
                    />
                ))}
            </StripedContainer>
        </Wrapper>
    );
}

export default ProjectsDrawer;