import { FC, useEffect, useState } from 'react';
import { DefaultStripeSpace, DummyProjects, Projects, StripeWidth } from './constants';
import ProjectStripe from './Project Stripe/ProjectStripe';
import { IDrawer } from 'Utils/types';
import {
    Wrapper,
    ListWrapper,
    CategoriesList,
    Catergory,
    StripedContainer
} from './ProjectsDrawer.style';

const ProjectsDrawer: FC<IDrawer> = ({
    open,
    openDelay
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [hoveredCategory, setHoveredCategory] = useState<string>('');
    const [enterState, setEnterState] = useState<boolean>(false);

    useEffect(() => {
        if (open) {
            if (openDelay > 0) setTimeout(() => setEnterState(true), openDelay * 1000);
            else setEnterState(true);
        }
        else {
            setSelectedCategory('');
            setHoveredCategory('');
            setEnterState(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const isSelected = (stripeKey: string): boolean => selectedCategory === stripeKey;
    const isHovered = (stripeKey: string): boolean => hoveredCategory === stripeKey;

    return (
        <Wrapper open={enterState}>
            <ListWrapper open={enterState}>
                <CategoriesList>
                    {Projects.map(cat => (
                        <Catergory
                            selected={isSelected(cat.key)}
                            onMouseEnter={() => setHoveredCategory(cat.key)}
                            onMouseLeave={() => setHoveredCategory('')}
                            onClick={() => setSelectedCategory(cat.key)}
                        >
                            {cat.key}
                        </Catergory>
                    ))}
                </CategoriesList>
            </ListWrapper>
            <StripedContainer width={Projects.length * DefaultStripeSpace}>
                {DummyProjects.map((project, index) => (
                    <ProjectStripe
                        enabled={enterState}
                        index={index}
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