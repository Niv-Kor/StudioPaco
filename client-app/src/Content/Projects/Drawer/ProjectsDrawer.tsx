import { FC, useEffect, useRef, useState } from 'react';
import { DefaultStripSpace, StripWidth } from '../constants';
import ProjectStrip from '../Project Strip/ProjectStrip';
import { DummyProjects, Projects as Categories, Projects } from '../data';
import { IProjectCategory, IProjectData } from '../types';
import { isMobile } from 'Utils/Theme';
import { IDrawer } from 'Utils/types';
import useBackButton from "shared/hooks/useBackButton";
import useTranslation from "shared/hooks/useTranslation";
import { RTLTextAlignClassName } from "Utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import {
    Wrapper,
    ListWrapper,
    CategoriesList,
    Category,
    StripsContainer,
    ListDelimiter,
    CategoryIcon
} from './ProjectsDrawer.style';

const ProjectsDrawer: FC<IDrawer> = ({
    open,
    openDelay,
    onClose
}) => {
    const { projectId } = useParams<{ projectId?: string }>();
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [hoveredCategory, setHoveredCategory] = useState<string>('');
    const [initialProject, setInitialProject] = useState<IProjectData>();
    const [lastValidCategory, setLastValidCategory] = useState<string>('');
    const [lastSelectedCategory, setLastSelectedCategory] = useState<string>('');
    const [enterState, setEnterState] = useState<boolean>(false);
    const [stripHoverCooldown, setStripHoverCooldown] = useState<boolean>(false);
    const [showCategories, setCategoriesFlag] = useState<boolean>(true);
    const stripHoverDebouncer = useRef<NodeJS.Timeout | undefined>();
    const { translate, isRtl } = useTranslation();
    const navigate = useNavigate();

    useBackButton("Projects", onClose, open && showCategories && !selectedCategory);
    useEffect(() => {
        if (projectId) {
            Categories.forEach(category => {
                const projects = category.projects;
                const selectedProject = projects.find(x => x.name.toLowerCase() === projectId.toLowerCase());
                
                if (selectedProject) {
                    setInitialProject(selectedProject);
                    return;
                }
            })
        }
    }, [projectId]);
    
    useEffect(() => {
        if (open) {
            if (openDelay > 0) setTimeout(() => setEnterState(true), openDelay * 1000);
            else setEnterState(true);

            navigate("/projects", { replace: true });
        }
        else {
            setSelectedCategory('');
            setHoveredCategory('');
            setEnterState(false);
            setCategoriesFlag(true);

            navigate("/", { replace: true });
        }
    }, [open]);

    useEffect(() => {
        setLastSelectedCategory(selectedCategory);
        if (!!selectedCategory) setLastValidCategory(selectedCategory);
    }, [selectedCategory]);

    const isSelected = (stripKey: string): boolean => selectedCategory === stripKey;
    const isHovered = (stripKey: string): boolean => hoveredCategory === stripKey;

    return (
        <Wrapper open={enterState}>
            <ListWrapper open={enterState && showCategories && (!isMobile() || !selectedCategory)}>
                <CategoriesList rtl={isRtl}>
                    {Categories.map(cat => (
                        <Category
                            className={RTLTextAlignClassName}
                            key={cat.id}
                            rtl={isRtl}
                            selected={isSelected(cat.id)}
                            margin={cat.keyMargin}
                            onMouseEnter={() => {
                                setHoveredCategory(cat.id);
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
                                const nextState = isSelected(cat.id) ? '' : cat.id;
                                setSelectedCategory(nextState);
                            }}
                        >
                            {!!cat.icon && (
                                <CategoryIcon
                                    src={cat.icon}
                                    alt=""
                                />
                            )}
                            {translate(cat.title)}
                        </Category>
                    ))}
                </CategoriesList>
                <ListDelimiter
                    displayed={enterState}
                    rtl={isRtl}
                />
            </ListWrapper>
            {isMobile() ? (
                <ProjectStrip
                    isDrawerOpen={open}
                    category={Projects.find(x => x.id === lastValidCategory) || Projects[0]}
                    enabled={enterState}
                    index={0}
                    width={10}
                    selected={!!selectedCategory}
                    initialProject={initialProject}
                    hovered={true}
                    openDelay={!!lastSelectedCategory ? .4 : 0}
                    onCategoryClose={() => setSelectedCategory('')}
                    onProjectInspection={() => setCategoriesFlag(false)}
                    onProjectDismissal={() => setCategoriesFlag(true)}
                />
            ) : (
                <StripsContainer width={Categories.length * DefaultStripSpace}>
                    {DummyProjects
                        .reverse()
                        .sort((a: IProjectCategory, b: IProjectCategory) => a.stripIndex - b.stripIndex)
                        .map((project: IProjectCategory, index: number) => (
                        <ProjectStrip
                            isDrawerOpen={open}
                            category={project}
                            enabled={enterState}
                            index={index}
                            width={StripWidth}
                            selected={isSelected(project.id)}
                            initialProject={initialProject}
                            hovered={
                                isHovered(project.id) ||
                                isSelected(project.id) ||
                                (
                                    index === 1 &&
                                    !hoveredCategory &&
                                    !selectedCategory &&
                                    !stripHoverCooldown
                                )
                            }
                            openDelay={!!lastSelectedCategory ? .4 : 0}
                            onCategoryClose={() => setSelectedCategory('')}
                            onProjectInspection={() => setCategoriesFlag(false)}
                            onProjectDismissal={() => setCategoriesFlag(true)}
                        />
                    ))}
                </StripsContainer>
            )}
        </Wrapper>
    );
}

export default ProjectsDrawer;