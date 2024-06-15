import { FC } from 'react';
import {
    Container,
    List,
    Delimiter,
    ListRowHebrew,
    ListRowEnglish
} from './ContactDrawer.style';

interface IContactDrawer {
    open: boolean;
}

const ConntactDrawer: FC<IContactDrawer> = ({ open }) => {
    return (
        <Container open={open}>
            <List>
                <ListRowHebrew>אדריכל . עמית קורח.</ListRowHebrew>
                <ListRowEnglish>arch . Amit Korach</ListRowEnglish>
                <ListRowEnglish>+972 . 0506.7575.81</ListRowEnglish>
                <ListRowEnglish>amit@studiopaco.com</ListRowEnglish>
            </List>
            <Delimiter open={open} />
        </Container>
    );
}

export default ConntactDrawer;