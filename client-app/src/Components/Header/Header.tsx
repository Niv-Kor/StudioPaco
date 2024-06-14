import { FC, useState } from 'react';
import { Container } from './Header.style';
import { DrawerEnterTime } from 'Utils/constants';
import { MainDrawer } from 'Utils/types';
import MainDrawerContainer from 'Components/Main Drawer Container/MainDrawer';
import AboutDrawer from 'Content/About/AboutDrawer';
import ProjectsDrawer from 'Content/Projects/ProjectsDrawer';

const Header: FC = () => {
    const [currentOpenDrawer, setCurrentOpenDrawer] = useState<MainDrawer>(MainDrawer.None);

    return (
        <Container>
            <MainDrawerContainer
                buttonText={'about'}
                openDelay={(currentOpenDrawer !== MainDrawer.About && currentOpenDrawer !== MainDrawer.None) ? DrawerEnterTime : 0}
                onDrawerChange={flag => setCurrentOpenDrawer(flag ? MainDrawer.About : MainDrawer.None)}
                shouldClose={currentOpenDrawer !== MainDrawer.About}
                Drawer={AboutDrawer}
            />
            <MainDrawerContainer
                buttonText={'projects'}
                openDelay={(currentOpenDrawer !== MainDrawer.Projects && currentOpenDrawer !== MainDrawer.None) ? DrawerEnterTime : 0}
                onDrawerChange={flag => setCurrentOpenDrawer(flag ? MainDrawer.Projects : MainDrawer.None)}
                shouldClose={currentOpenDrawer !== MainDrawer.Projects}
                Drawer={ProjectsDrawer}
            />
        </Container>
    );
}

export default Header;