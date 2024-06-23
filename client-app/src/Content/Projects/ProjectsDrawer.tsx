import { FC, useEffect, useRef, useState } from 'react';
import { DefaultStripeSpace, DummyProjects, Projects, StripeWidth } from './constants';
import ProjectStripe from './Project Stripe/ProjectStripe';
import { IProjectCategory } from './types';
import { IDrawer } from 'Utils/types';
import {
    Wrapper,
    ListWrapper,
    CategoriesList,
    Category,
    StripesContainer,
    ListDelimiter
} from './ProjectsDrawer.style';

const ProjectsDrawer: FC<IDrawer> = ({
    open,
    openDelay
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [hoveredCategory, setHoveredCategory] = useState<string>('');
    const [lastSelectedCategory, setLastSelectedCategory] = useState<string>('');
    const [enterState, setEnterState] = useState<boolean>(false);
    const [stripeHoverCooldown, setStripeHoverCooldown] = useState<boolean>(false);
    const stripeHoverDebouncer = useRef<NodeJS.Timeout | undefined>();

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

    useEffect(() => {
        setLastSelectedCategory(selectedCategory);
    }, [selectedCategory]);

    const isSelected = (stripeKey: string): boolean => selectedCategory === stripeKey;
    const isHovered = (stripeKey: string): boolean => hoveredCategory === stripeKey;

    return (
        <Wrapper open={enterState}>
            <ListWrapper open={enterState}>
                <CategoriesList>
                    {Projects.map(cat => (
                        <Category
                            selected={isSelected(cat.key)}
                            onMouseEnter={() => {
                                setHoveredCategory(cat.key);
                                clearTimeout(stripeHoverDebouncer.current);
                                stripeHoverDebouncer.current = undefined;
                            }}
                            onMouseLeave={() => {
                                setHoveredCategory('');
                                setStripeHoverCooldown(true);

                                stripeHoverDebouncer.current = setTimeout(() => {
                                    setStripeHoverCooldown(false);
                                    stripeHoverDebouncer.current = undefined;
                                }, 200);
                            }}
                            onClick={() => {
                                const nextState = isSelected(cat.key) ? "" : cat.key;
                                setSelectedCategory(nextState);
                            }}
                        >
                            {cat.key}
                        </Category>
                    ))}
                </CategoriesList>
                <ListDelimiter displayed={enterState} />
            </ListWrapper>
            <StripesContainer width={Projects.length * DefaultStripeSpace}>
                {DummyProjects
                    .toReversed()
                    .sort((a: IProjectCategory, b: IProjectCategory) => a.stripeIndex - b.stripeIndex)
                    .map((project: IProjectCategory, index: number) => (
                    <ProjectStripe
                        enabled={enterState}
                        index={index}
                        width={StripeWidth}
                        selected={isSelected(project.key)}
                        hovered={isHovered(project.key) || isSelected(project.key) || (index === 1 && !hoveredCategory && !stripeHoverCooldown)}
                        leftMargin={project.leftMargin}
                        openDelay={!!lastSelectedCategory ? .4 : 0}
                    />
                ))}
            </StripesContainer>
        </Wrapper>
    );
}

export default ProjectsDrawer;