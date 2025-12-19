import { FC, useRef, useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProjectCategory, IProjectData } from '../types';
import ProjectInfo from '../Project Info/ProjectInfo';
import ProjectsTable from '../Table/ProjectsTable';
import useBackButton from "../../../shared/hooks/useBackButton";
import { ACTIVE_ACCENT_PAGE_CLASS, isMobile } from 'Utils/Theme';
import BackButton from 'resources/Graphics/Projects/Back-Button.svg';
import { StripWidth } from "../constants";
import Scrollbar from "Components/Scrollbar/Scrollbar";
import useScrollProps from "Components/Scrollbar/useScrollProps";
import useTranslation from "shared/hooks/useTranslation";
import { RTLTextAlignClassName } from "Utils/constants";
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
    MobileMask, BodyElementContainer
} from './ProjectStrip.style';

export interface IProjectStrip {
    category: IProjectCategory;
    isDrawerOpen: boolean;
    enabled: boolean;
    index: number;
    width: number;
    selected: boolean;
    hovered: boolean;
    initialProject?: IProjectData;
    openDelay?: number;
    onCategoryClose?: () => void;
    onProjectInspection?: () => void;
    onProjectDismissal?: () => void;
}

const ProjectStrip: FC<IProjectStrip> = props => {
    const {
        category,
        isDrawerOpen,
        selected,
        width,
        openDelay,
        initialProject,
        onCategoryClose,
        onProjectInspection,
        onProjectDismissal
    } = props;
    
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const [inspectedProject, setInspectedProject] = useState<IProjectData | undefined>();
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isTextDisplayed, setTextDisplayed] = useState<boolean>(false);
    const selectionTimeout = useRef<NodeJS.Timeout | undefined>();
    const textDisplayTimeout = useRef<NodeJS.Timeout | undefined>();
    const stripRef = useRef<HTMLDivElement>(null);
    const { translate, isRtl, textDir } = useTranslation();
    const rightOffset = useMemo<number>(() => {
        if (!stripRef?.current) return 0;

        const rect = stripRef.current.getBoundingClientRect();
        return window.innerWidth - rect.right;
    }, [stripRef, stripRef?.current]);

    const { scrollbarProps } = useScrollProps(
        containerRef,
        StripWidth,
        rightOffset,
        isOpen && !inspectedProject && isDrawerOpen
    );
    
    useBackButton("Project Category", onCategoryClose, isOpen && !inspectedProject);

    useEffect(() => {
        if (!isDrawerOpen) {
            onCategoryClose?.();
            setInspectedProject(undefined);
            navigate("/", { replace: true });
        }
    }, [isDrawerOpen]);
    
    useEffect(() => {
        if (!inspectedProject && initialProject && category.projects.includes(initialProject)) {
            setInspectedProject(initialProject);
            setOpen(true);
        }
    }, [initialProject]);
    
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
        if (!!inspectedProject) {
            onProjectInspection?.();
            
            const projectName = inspectedProject.name.toLowerCase();
            navigate(`/projects/${projectName}`, { replace: true });
        }
        else {
            onProjectDismissal?.();
            if (isOpen && isDrawerOpen) navigate("/projects", { replace: true });
        }
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
                open={isOpen && !inspectedProject && isDrawerOpen}
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
                    <ContentContainer rtl={isRtl}>
                        <Scrollbar {...scrollbarProps} />
                        <TitleText
                            className={RTLTextAlignClassName}
                            displayed={isTextDisplayed}
                            fullHeight={!category.projects.length}
                            rtl={isRtl}
                        >
                            <Title onClick={() => isMobile() && onCategoryClose?.()}>
                                {isMobile() && (
                                    <BackButtonIcon
                                        src={BackButton}
                                        alt={"back"}
                                    />
                                )}
                                <span className={'category-title'}>{translate(category.title)}</span>
                            </Title>
                            &nbsp;
                            <span
                                dangerouslySetInnerHTML={{ __html: translate(category.text) }}
                                dir={textDir}
                            />
                        </TitleText>
                        {!!category.bodyText && (
                            <BodyText
                                className={RTLTextAlignClassName}
                                dir={textDir}
                            >
                                {translate(category.bodyText)}
                            </BodyText>
                        )}
                        {category.bodyElement && (
                            <BodyElementContainer>
                                {category.bodyElement}
                            </BodyElementContainer>
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
                open={!!inspectedProject && isDrawerOpen}
                categoryName={translate(category.title)}
                data={inspectedProject}
                onClose={() => setInspectedProject(undefined)}
                offset={rightOffset + width - 1}
            />
        </>
    )
}

export default ProjectStrip;