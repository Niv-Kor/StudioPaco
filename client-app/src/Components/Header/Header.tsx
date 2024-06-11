import { FC } from 'react';
import AboutButton from 'Content/About/Button/AboutButton';
import ProjectsButton from 'Content/Projects/Button/ProjectsButton';
import { Container } from './Header.style';

const Header: FC = () => {
    return (
        <Container>
            <AboutButton />
            <ProjectsButton />
        </Container>
    );
}

export default Header;