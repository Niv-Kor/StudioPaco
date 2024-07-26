import { FC, useEffect, useRef, useState } from 'react';
import { DefaultStripSpace, StripWidth } from '../constants';
import ProjectStrip from '../Project Strip/ProjectStrip';
import { IProjectCategory, DummyProjects, Projects } from '../types';
import { IDrawer } from 'Utils/types';
import {
    Wrapper,
    ListWrapper,
    CategoriesList,
    Category,
    StripsContainer,
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
    const [stripHoverCooldown, setStripHoverCooldown] = useState<boolean>(false);
    const [showCategories, setCategoriesFlag] = useState<boolean>(true);
    const stripHoverDebouncer = useRef<NodeJS.Timeout | undefined>();

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

    const isSelected = (stripKey: string): boolean => selectedCategory === stripKey;
    const isHovered = (stripKey: string): boolean => hoveredCategory === stripKey;

    return (
        <Wrapper open={enterState}>
            <ListWrapper open={enterState && showCategories}>
                <CategoriesList>
                    {Projects.map(cat => (
                        <Category
                            selected={isSelected(cat.key)}
                            onMouseEnter={() => {
                                setHoveredCategory(cat.key);
                                clearTimeout(stripHoverDebouncer.current);
                                stripHoverDebouncer.current = undefined;
                            }}
                            onMouseLeave={() => {
                                setHoveredCategory('');
                                setStripHoverCooldown(true);

                                stripHoverDebouncer.current = setTimeout(() => {
                                    setStripHoverCooldown(false);
                                    stripHoverDebouncer.current = undefined;
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
            <StripsContainer width={Projects.length * DefaultStripSpace}>
                {DummyProjects
                    .toReversed()
                    .sort((a: IProjectCategory, b: IProjectCategory) => a.stripIndex - b.stripIndex)
                    .map((project: IProjectCategory, index: number) => (
                    <ProjectStrip
                        category={project}
                        enabled={enterState}
                        index={index}
                        width={StripWidth}
                        selected={isSelected(project.key)}
                        hovered={isHovered(project.key) || isSelected(project.key) || (index === 1 && !hoveredCategory && !stripHoverCooldown)}
                        openDelay={!!lastSelectedCategory ? .4 : 0}
                        onProjectInspection={() => setCategoriesFlag(false)}
                        onProjectDismissal={() => setCategoriesFlag(true)}
                    />
                ))}
            </StripsContainer>
        </Wrapper>
    );
}

export default ProjectsDrawer;