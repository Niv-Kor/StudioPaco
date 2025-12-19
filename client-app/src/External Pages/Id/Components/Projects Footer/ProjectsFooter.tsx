import { FC, useMemo } from "react";
import WebsiteIcon from "resources/Graphics/Card/website.svg";
import { ButtonContainer, Container, GridMap, WebsiteLink } from "./ProjectsFooter.style";
import { IProjectData } from "Content/Projects/types";
import { generateProjects } from "./utils";
import Grid from "./Grid/Grid";

const ProjectsFooter: FC = () => {
    const projectImages = useMemo<IProjectData[]>(() => generateProjects(4), []);
    
    return (
        <Container>
            <ButtonContainer>
                <WebsiteLink
                    href={"/projects"}
                    target="_blank"
                >
                    <img
                        src={WebsiteIcon}
                        alt="projects"
                    />
                </WebsiteLink>
            </ButtonContainer>
            <GridMap>
                {projectImages.map(({ thumbnail, name }, index) => (
                    <Grid
                        key={`project grid ${index}`}
                        projectName={name}
                        imgSrc={thumbnail}
                    />
                ))}
            </GridMap>
        </Container>
    );
}

export default ProjectsFooter;