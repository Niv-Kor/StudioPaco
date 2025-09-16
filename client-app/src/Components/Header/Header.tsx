import { FC, useEffect, useState } from 'react';
import { Container } from './Header.style';
import { DrawerEnterTime } from 'Utils/constants';
import { MainDrawer } from 'Utils/types';
import MainDrawerContainer from 'Components/Main Drawer Container/MainDrawer';
import AboutDrawer from 'Content/About/AboutDrawer';
import ProjectsDrawer from 'Content/Projects/Drawer/ProjectsDrawer';
import useTranslation from "shared/hooks/useTranslation";
import { Buttons } from "./consts";

interface IHeader {
    onDrawerChange: (drawer: MainDrawer) => void;
    forceCloseDrawers: boolean;
}

const Header: FC<IHeader> = ({
    onDrawerChange,
    forceCloseDrawers
}) => {
    const [currentOpenDrawer, setCurrentOpenDrawer] = useState<MainDrawer>(MainDrawer.None);
    const { translate } = useTranslation();

    useEffect(() => {
        if (forceCloseDrawers) setCurrentOpenDrawer(MainDrawer.None);
    }, [forceCloseDrawers])

    useEffect(() => {
        onDrawerChange?.(currentOpenDrawer);
    }, [currentOpenDrawer]);

    return (
        <Container>
            <MainDrawerContainer
                buttonText={translate(Buttons.about)}
                openDelay={(currentOpenDrawer !== MainDrawer.About && currentOpenDrawer !== MainDrawer.None) ? DrawerEnterTime : 0}
                onDrawerChange={flag => setCurrentOpenDrawer(flag ? MainDrawer.About : MainDrawer.None)}
                shouldClose={currentOpenDrawer !== MainDrawer.About}
                Drawer={AboutDrawer}
            />
            <MainDrawerContainer
                buttonText={translate(Buttons.projects)}
                openDelay={(currentOpenDrawer !== MainDrawer.Projects && currentOpenDrawer !== MainDrawer.None) ? DrawerEnterTime : 0}
                onDrawerChange={flag => setCurrentOpenDrawer(flag ? MainDrawer.Projects : MainDrawer.None)}
                shouldClose={currentOpenDrawer !== MainDrawer.Projects}
                Drawer={ProjectsDrawer}
            />
        </Container>
    );
}

export default Header;