import { FC, useState } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import ProjectsDrawer from 'Content/Projects/Drawer/ProjectsDrawer';

const ProjectsButton: FC = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <>
            <MenuButton
                text={"projects"}
                onClick={() => setDrawerOpen(prevState => !prevState)}
            />
            <ProjectsDrawer open={drawerOpen} />
        </>
    );
}

export default ProjectsButton;