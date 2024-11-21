import { FC } from 'react';
import {
    Container,
    List,
    Delimiter,
    ListRowHebrew,
    ListRowEnglish,
    MobileBackground
} from './ContactDrawer.style';

interface IContactDrawer {
    open: boolean;
}

const ContactDrawer: FC<IContactDrawer> = ({ open }) => {
    return (
        <>
            <MobileBackground displayed={open} />
            <Container open={open}>
                <List>
                    <ListRowHebrew letterSpacing={2.2}>.אדריכל . עמית קורח</ListRowHebrew>
                    <ListRowEnglish letterSpacing={3.6}>arch . Amit Korach</ListRowEnglish>
                    <ListRowEnglish letterSpacing={.9}>+972 . 0506.7575.81</ListRowEnglish>
                    <ListRowEnglish letterSpacing={1.2}>amit@studiopaco.com</ListRowEnglish>
                </List>
                <Delimiter open={open} />
            </Container>
        </>
    );
}

export default ContactDrawer;