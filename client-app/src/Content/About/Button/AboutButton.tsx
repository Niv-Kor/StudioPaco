import { FC, useState } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import AboutDrawer from 'Content/About/Drawer/AboutDrawer';

const AboutButton: FC = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <>
            <MenuButton
                text={"about"}
                revertMode={false}
                onClick={() => setDrawerOpen(prevState => !prevState)}
            />
            <AboutDrawer open={drawerOpen} />
        </>
    );
}

export default AboutButton;