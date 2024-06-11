import { FC } from 'react';
import {
    Container,
    List,
    ListRow,
    Delimiter
} from './ContactDrawer.style';

interface IContactDrawer {
    open: boolean;
}

const ConntactDrawer: FC<IContactDrawer> = ({ open }) => {
    return (
        <Container open={open}>
            <List>
                <ListRow>אדריכל . עמית קורח.</ListRow>
                <ListRow>arch . Amit Korach</ListRow>
                <ListRow>+972 . 0506.7575.81</ListRow>
                <ListRow>amit@studiopaco.com</ListRow>
            </List>
            <Delimiter open={open} />
        </Container>
    );
}

export default ConntactDrawer;