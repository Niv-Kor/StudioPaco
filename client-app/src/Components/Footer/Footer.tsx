import { FC } from 'react';
import { Container } from "./Footer.style";
import FollowButton from 'Content/Follow/Button/FollowButton';
import ContactButton from 'Content/Contact/Button/ContactButton';

const Footer: FC = () => {
    return (
        <Container>
            <FollowButton />
            <ContactButton />
        </Container>
    );
}

export default Footer;