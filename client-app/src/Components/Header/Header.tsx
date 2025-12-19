import { FC, useEffect, useState } from 'react';
import { Container } from './Header.style';
import { DrawerEnterTime } from 'Utils/constants';
import { MainDrawer } from 'Utils/types';
import MainDrawerContainer from "Components/MainDrawerContainer/MainDrawer";
import AboutDrawer from 'Content/About/AboutDrawer';
import ProjectsDrawer from 'Content/Projects/Drawer/ProjectsDrawer';
import useTranslation from "shared/hooks/useTranslation";
import { Buttons } from "./consts";
import { useLocation, useNavigate } from "react-router-dom";

interface IHeader {
    onDrawerChange: (drawer: MainDrawer) => void;
    forceCloseDrawers: boolean;
}

const Header: FC<IHeader> = ({
    onDrawerChange,
    forceCloseDrawers,
}) => {
    const location = useLocation();
    const [currentOpenDrawer, setCurrentOpenDrawer] = useState<MainDrawer>(
        location.pathname.startsWith('/projects') ? MainDrawer.Projects : MainDrawer.None
    );
    
    const { translate } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        if (forceCloseDrawers) {
            setCurrentOpenDrawer(MainDrawer.None);
            navigate("/", { replace: true });
        }
    }, [forceCloseDrawers])

    useEffect(() => {
        onDrawerChange?.(currentOpenDrawer);
        if (currentOpenDrawer === MainDrawer.None) navigate("/", { replace: true });
    }, [currentOpenDrawer]);

    return (
        <Container>
            <MainDrawerContainer
                buttonText={translate(Buttons.about)}
                openDelay={(currentOpenDrawer !== MainDrawer.About && currentOpenDrawer !== MainDrawer.None) ? DrawerEnterTime : 0}
                onDrawerChange={flag => setCurrentOpenDrawer(flag ? MainDrawer.About : MainDrawer.None)}
                shouldOpen={currentOpenDrawer === MainDrawer.About}
                Drawer={AboutDrawer}
            />
            <MainDrawerContainer
                buttonText={translate(Buttons.projects)}
                openDelay={(currentOpenDrawer !== MainDrawer.Projects && currentOpenDrawer !== MainDrawer.None) ? DrawerEnterTime : 0}
                onDrawerChange={flag => setCurrentOpenDrawer(flag ? MainDrawer.Projects : MainDrawer.None)}
                shouldOpen={currentOpenDrawer === MainDrawer.Projects}
                Drawer={ProjectsDrawer}
            />
        </Container>
    );
}

export default Header;