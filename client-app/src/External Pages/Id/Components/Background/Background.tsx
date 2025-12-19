import { FC } from "react";
import LogoBackgroundImg from 'resources/Graphics/Logo/logo_background.svg';
import LogoForegroundImg from 'resources/Graphics/Logo/logo_foreground.png';
import LogoTextImg from "../../../../resources/Graphics/Logo/logo_text.svg";
import { Container } from "./Background.style";

const Background: FC = () => {
    return (
        <Container>
            <img src={LogoBackgroundImg} alt={''}/>
            <img src={LogoForegroundImg} alt={''}/>
            <img src={LogoTextImg} alt={''}/>
        </Container>
    )
}

export default Background;