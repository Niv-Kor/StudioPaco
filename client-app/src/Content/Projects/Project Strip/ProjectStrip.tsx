import { FC, useRef, useMemo, useState, useEffect } from 'react';
import { IProjectCategory, IProjectData } from '../types';
import ProjectInfo from '../Project Info/ProjectInfo';
import ProjectsTable from '../Table/ProjectsTable';
import useBackButton from "../../../shared/hooks/useBackButton";
import { ACTIVE_ACCENT_PAGE_CLASS, isMobile } from 'Utils/Theme';
import BackButton from 'resources/Graphics/Projects/Back-Button.svg';
import { StripWidth } from "../constants";
import Scrollbar from "Components/Scrollbar/Scrollbar";
import useScrollProps from "Components/Scrollbar/useScrollProps";
import {
    Strip,
    Container,
    ContentWrapper,
    ContentContainer,
    TitleText,
    BodyText,
    ContentElementContainer,
    BackButtonIcon,
    Title,
    MobileMask
} from './ProjectStrip.style';

export interface IProjectStrip {
    category: IProjectCategory;
    enabled: boolean;
    index: number;
    width: number;
    selected: boolean;
    hovered: boolean;
    openDelay?: number;
    onCategoryClose?: () => void;
    onProjectInspection?: () => void;
    onProjectDismissal?: () => void;
}

const ProjectStrip: FC<IProjectStrip> = props => {
    const {
        category,
        selected,
        width,
        openDelay,
        onCategoryClose,
        onProjectInspection,
        onProjectDismissal
    } = props;
    const containerRef = useRef<HTMLDivElement>(null);
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
    }, [stripRef, stripRef?.current]);

    const { scrollbarProps } = useScrollProps(
        containerRef,
        StripWidth,
        rightOffset,
        isOpen && !inspectedProject
    );
    
    useBackButton("Project Category", onCategoryClose, isOpen && !inspectedProject);
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
    }, [isOpen]);

    useEffect(() => {
        if (!!inspectedProject) onProjectInspection?.();
        else onProjectDismissal?.();
    }, [inspectedProject]);

    return (
        <>
            <Strip
                {...props}
                {...category}
                ref={stripRef}
            />
            <Container
                className={(selected && !inspectedProject) ? ACTIVE_ACCENT_PAGE_CLASS : ''}
                open={isOpen && !inspectedProject}
                rightOffset={rightOffset + width}
            >
                {isMobile() && (
                    <MobileMask
                        open={isOpen && !inspectedProject}
                        height={170}
                    />
                )}
                <ContentWrapper
                    ref={containerRef}
                    offset={rightOffset + width}
                >
                    <ContentContainer>
                        <Scrollbar {...scrollbarProps} />
                        <TitleText
                            displayed={isTextDisplayed}
                            fullHeight={!category.projects.length}
                        >
                            <Title onClick={() => isMobile() && onCategoryClose?.()}>
                                {isMobile() && (
                                    <BackButtonIcon
                                        src={BackButton}
                                        alt={"back"}
                                    />
                                )}
                                <span className={'category-title'}>{category.key}</span>
                            </Title>
                            <span dangerouslySetInnerHTML={{ __html: category.text }}></span>
                        </TitleText>
                        {!!category.bodyText && (
                            <BodyText>
                                {category.bodyText}
                            </BodyText>
                        )}
                        <ContentElementContainer>
                            <ProjectsTable
                                category={category}
                                onSelection={setInspectedProject}
                            />
                        </ContentElementContainer>
                    </ContentContainer>
                </ContentWrapper>
                {isMobile() && (
                    <MobileMask
                        open={isOpen && !inspectedProject}
                        height={70}
                    />
                )}
            </Container>
            <ProjectInfo
                open={!!inspectedProject}
                categoryName={category.key}
                data={inspectedProject}
                onClose={() => setInspectedProject(undefined)}
                offset={rightOffset + width - 1}
            />
        </>
    )
}

export default ProjectStrip;