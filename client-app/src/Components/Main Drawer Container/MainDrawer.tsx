import { FC, useEffect, useState } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import { IDrawer } from 'Utils/types';
import useTranslation from "../../shared/hooks/useTranslation";

interface IMainDrawerContainer {
    buttonText: string;
    openDelay: number;
    shouldClose: boolean;
    onDrawerChange: (flag: boolean) => void;
    Drawer: FC<IDrawer>
}

const MainDrawerContainer: FC<IMainDrawerContainer> = ({
    buttonText,
    openDelay,
    onDrawerChange,
    shouldClose,
    Drawer
}) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const onClick = (): void => {
        if (drawerOpen) onDrawerChange(false);
        setDrawerOpen(prevState => !prevState);
    }

    useEffect(() => {
        if (drawerOpen) onDrawerChange?.(drawerOpen);
    }, [drawerOpen])

    useEffect(() => {
        if (shouldClose) setDrawerOpen(false);
    }, [shouldClose]);

    return (
        <>
            <MenuButton
                text={buttonText}
                revertMode={false}
                onClick={onClick}
            />
            <Drawer
                open={drawerOpen}
                openDelay={openDelay}
                onClose={() => {
                    onDrawerChange(false);
                    setDrawerOpen(false);
                }}
            />
        </>
    );
}

export default MainDrawerContainer;