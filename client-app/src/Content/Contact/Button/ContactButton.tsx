import { FC, useState, useRef } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import ContactDrawer from 'Content/Contact/Drawer/ContactDrawer';
import useOutsideClick from 'shared/hooks/useOutsideClick';
import { Container } from './ContactButton.style';
import { isMobile } from "Utils/Theme";

const ContactButton: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
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
                    text={"contact"}
                    onClick={() => setDrawerOpen(prevState => { debugger; return !prevState })}
                />
                {!isMobile() && drawer}
            </Container>
            {isMobile() && drawer}
        </>
    );
}

export default ContactButton;