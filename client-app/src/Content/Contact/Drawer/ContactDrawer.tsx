import { FC } from 'react';
import useBackButton from "shared/hooks/useBackButton";
import ContactForm from "../ContactForm/ContactForm";
import { OUTSIDE_CLICKABLE } from "shared/hooks/useOutsideClick";
import { DrawerState, IDrawer } from "Utils/types";
import {
    Container,
    List,
    Delimiter,
    HeaderBackground,
    ListRow
} from './ContactDrawer.style';

const ContactDrawer: FC<IDrawer> = ({
    state,
    onClose
}) => {
    const isOpen = state === DrawerState.Open;
    
    useBackButton("Contact", onClose, isOpen);
    
    return (
        <Container state={state}>
            <HeaderBackground
                className={OUTSIDE_CLICKABLE}
                state={state}
            />
            <List>
                <ListRow letterSpacing={2.2}>.אדריכל . עמית קורח</ListRow>
                <ListRow letterSpacing={3.6}>arch . Amit Korach</ListRow>
                <ListRow letterSpacing={.9}>+972 . 0506.7575.81</ListRow>
                <ListRow letterSpacing={1.2}>amit@studiopaco.com</ListRow>
            </List>
            <Delimiter open={isOpen} />
            <ContactForm isDrawerOpen={isOpen} />
            <Delimiter open={isOpen} />
        </Container>
    );
};

export default ContactDrawer;