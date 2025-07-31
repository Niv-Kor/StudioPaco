import { forwardRef } from 'react';
import useBackButton from "shared/hooks/useBackButton";
import ContactForm from "../ContactForm/ContactForm";
import {
    Container,
    List,
    Delimiter,
    ListRowHebrew,
    ListRowEnglish,
    MobileBackground,
    HeaderBackground
} from './ContactDrawer.style';
import { OUTSIDE_CLICKABLE } from "../../../shared/hooks/useOutsideClick";

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
            <Container
                ref={ref}
                open={open}
            >
                <HeaderBackground className={OUTSIDE_CLICKABLE} />
                <List>
                    <ListRowHebrew letterSpacing={2.2}>.אדריכל . עמית קורח</ListRowHebrew>
                    <ListRowEnglish letterSpacing={3.6}>arch . Amit Korach</ListRowEnglish>
                    <ListRowEnglish letterSpacing={.9}>+972 . 0506.7575.81</ListRowEnglish>
                    <ListRowEnglish letterSpacing={1.2}>amit@studiopaco.com</ListRowEnglish>
                </List>
                <Delimiter open={open} />
                <ContactForm isDrawerOpen={open} />
                <Delimiter open={open} />
            </Container>
        </>
    );
});

export default ContactDrawer;