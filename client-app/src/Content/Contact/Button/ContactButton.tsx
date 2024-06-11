import { FC, useState, useRef } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import ContactDrawer from 'Content/Contact/Drawer/ContactDrawer';
import useOutsideClick from 'Utils/UseOutsideClick';
import { Container } from './ContactButton.style';

const ContactButton: FC = () => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    useOutsideClick(drawerRef, () => setDrawerOpen(false));

    return (
        <Container ref={drawerRef}>
            <MenuButton
                text={"contact"}
                onClick={() => setDrawerOpen(prevState => !prevState)}
            />
            <ContactDrawer open={drawerOpen} />
        </Container>
    );
}

export default ContactButton;