import { FC } from 'react';
import { Container } from "./Footer.style";
import FollowButton from 'Content/Follow/Button/FollowButton';
import ContactButton from 'Content/Contact/Button/ContactButton';
import LanguageButton from "../../Content/Language/Button/LanguageButton";

const Footer: FC = () => {
    return (
        <Container>
            <FollowButton />
            <ContactButton />
            <LanguageButton />
        </Container>
    );
}

export default Footer;