import { FC, useRef, useMemo, useState, useEffect } from 'react';
import { IProjectCategory, IProjectData } from '../types';
import ProjectInfo from '../Project Info/ProjectInfo';
import ProjectsTable from '../Table/ProjectsTable';
import {
    Strip,
    Container,
    ContentWrapper,
    Text,
    ContentElementContainer
} from './ProjectStrip.style';

export interface IProjectStrip {
    category: IProjectCategory;
    enabled: boolean;
    index: number;
    width: number;
    selected: boolean;
    hovered: boolean;
    openDelay?: number;
    onProjectInspection?: () => void;
    onProjectDismissal?: () => void;
}

const ProjectStrip: FC<IProjectStrip> = props => {
    const {
        category,
        selected,
        width,
        openDelay,
        onProjectInspection,
        onProjectDismissal
    } = props;
    const [inspectedProject, setInspectedProject] = useState<IProjectData | undefined>();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isTextDisplayed, setTextDisplayed] = useState<boolean>(false);
    const selectionTimeout = useRef<NodeJS.Timeout | undefined>();
    const textDisplayTimeout = useRef<NodeJS.Timeout | undefined>();
    const stripRef = useRef<HTMLDivElement>(null);
    const rightOffset = useMemo<number>(() => {
        if (!stripRef?.current) return 0;

        const rect = stripRef.current.getBoundingClientRect();
        return window.innerWidth - rect.right;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stripRef, stripRef?.current]);

    useEffect(() => {
        if (selected) {
            selectionTimeout.current = setTimeout(() => {
                setOpen(true);
                selectionTimeout.current = undefined;
            }, (openDelay ?? 0) * 1000);
        }
        else {
            if (!!selectionTimeout.current) {
                clearTimeout(selectionTimeout.current);
                selectionTimeout.current = undefined;
            }

            setOpen(false);
            setInspectedProject(undefined);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    useEffect(() => {
        if (isOpen) {
            textDisplayTimeout.current = setTimeout(() => {
                setTextDisplayed(true);
                textDisplayTimeout.current = undefined;
            }, 300);
        }
        else {
            if (!!textDisplayTimeout.current) {
                clearTimeout(textDisplayTimeout.current);
                textDisplayTimeout.current = undefined;
            }

            setTextDisplayed(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        if (!!inspectedProject) onProjectInspection?.();
        else onProjectDismissal?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inspectedProject]);

    return (
        <>
            <Strip
                {...props}
                {...category}
                ref={stripRef}
            />
            <Container
                className={selected ? 'active-project' : ''}
                open={isOpen && !inspectedProject}
                rightOffset={rightOffset + width}
            >
                <ContentWrapper offset={rightOffset + width}>
                    <Text
                        displayed={isTextDisplayed}
                        fullHeight={!category.projects.length}
                    >
                        <span className={'category-title'}>{category.key}</span>
                        {category.text}
                    </Text>
                    <ContentElementContainer>
                        <ProjectsTable
                            category={category}
                            onSelection={setInspectedProject}
                        />
                    </ContentElementContainer>
                </ContentWrapper>
            </Container>
            <ProjectInfo
                open={!!inspectedProject}
                categoryName={category.key}
                data={inspectedProject}
                onClose={() => setInspectedProject(undefined)}
                offset={rightOffset + width}
            />
        </>
    )
}

export default ProjectStrip;