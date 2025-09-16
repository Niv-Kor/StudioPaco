import { FC, useState, useRef } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import ContactDrawer from 'Content/Contact/Drawer/ContactDrawer';
import useOutsideClick from 'shared/hooks/useOutsideClick';
import useTranslation from "shared/hooks/useTranslation";
import { Container } from './ContactButton.style';
import { isMobile } from "Utils/Theme";
import { ButtonText } from "./consts";

const ContactButton: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const { translate } = useTranslation();
    const drawer = (
        <ContactDrawer
            ref={drawerRef}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
        />
    );
    
    useOutsideClick(
        [containerRef, drawerRef],
        () => setDrawerOpen(false)
    );
    
    return (
        <>
            <Container ref={containerRef}>
                <MenuButton
                    text={translate(ButtonText)}
                    onClick={() => setDrawerOpen(prevState => !prevState)}
                />
                {!isMobile() && drawer}
            </Container>
            {isMobile() && drawer}
        </>
    );
}

export default ContactButton;