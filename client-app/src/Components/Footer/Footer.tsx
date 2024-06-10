import { FC } from 'react';
import { Container } from "./Footer.style";
import MenuButton from '../Menu Button/MenuButton';
import FollowButton from './FollowButton';

const Footer: FC = () => {
    return (
        <Container>
            <FollowButton />
            <MenuButton
                text={"contact"}
                onClick={() => {}}
            />
        </Container>
    );
}

export default Footer;