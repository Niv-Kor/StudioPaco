import { FC } from "react";
import useTranslation from "shared/hooks/useTranslation";
import { ButtonContainer, Container, GridMap, Grid } from "./ProjectsFooter.style";

const ProjectsFooter: FC = () => {
    const { translate, textDir } = useTranslation();

    return (
        <Container>
            <ButtonContainer>
                .projects
            </ButtonContainer>
            <GridMap>
                <Grid>hi</Grid>
                <Grid>hi</Grid>
                <Grid>hi</Grid>
                <Grid>hi</Grid>
            </GridMap>
        </Container>
    );
}

export default ProjectsFooter;