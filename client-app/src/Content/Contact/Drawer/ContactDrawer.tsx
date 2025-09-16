import { forwardRef } from 'react';
import useBackButton from "shared/hooks/useBackButton";
import ContactForm from "../ContactForm/ContactForm";
import { OUTSIDE_CLICKABLE } from "shared/hooks/useOutsideClick";
import {
    Container,
    List,
    Delimiter,
    MobileBackground,
    HeaderBackground, ListRow, BackgroundMask
} from './ContactDrawer.style';

interface IContactDrawer {
    open: boolean;
    onClose: () => void;
}

const ContactDrawer = forwardRef<HTMLDivElement, IContactDrawer>(({
    open,
    onClose
}, ref) => {
    useBackButton("Contact", onClose, open);
    
    return (
        <>
            <MobileBackground displayed={open} />
            <BackgroundMask displayed={open} />
            <Container
                ref={ref}
                open={open}
            >
                <HeaderBackground className={OUTSIDE_CLICKABLE} />
                <List>
                    <ListRow letterSpacing={2.2}>.אדריכל . עמית קורח</ListRow>
                    <ListRow letterSpacing={3.6}>arch . Amit Korach</ListRow>
                    <ListRow letterSpacing={.9}>+972 . 0506.7575.81</ListRow>
                    <ListRow letterSpacing={1.2}>amit@studiopaco.com</ListRow>
                </List>
                <Delimiter open={open} />
                <ContactForm isDrawerOpen={open} />
                <Delimiter open={open} />
            </Container>
        </>
    );
});

export default ContactDrawer;