import { FC } from 'react';
import MenuButton from '../Menu Button/MenuButton';
import { Container } from './Header.style';

const Header: FC = () => {
    return (
        <Container>
            <MenuButton
                text={"about"}
                onClick={() => {}}
            />
            <MenuButton
                text={"projects"}
                onClick={() => {}}
            />
        </Container>
    );
}

export default Header;