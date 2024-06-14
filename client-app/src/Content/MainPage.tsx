import { FC } from 'react';
import ParticlesBackground from 'Components/Particles Background/ParticlesBackground';
import LogoBackgroundImg from 'resources/Graphics/Logo/logo_background.svg';
import LogoForegroundImg from 'resources/Graphics/Logo/logo_foreground.svg';
import LogoTextImg from 'resources/Graphics/Logo/logo_text.svg';
import PageWrapper from 'Components/Page Wrapper/PageWrapper';
import {
    LogoWrapper,
    LogoBackground,
    LogoForeground,
    LogoText
} from './MainPage.style';

const MainPage: FC = () => {
    return (
        <PageWrapper>
            <ParticlesBackground />
            <LogoWrapper>
                <LogoBackground src={LogoBackgroundImg} alt={''} />
                <LogoForeground src={LogoForegroundImg} alt={''} />
                <LogoText src={LogoTextImg} alt={''} />
            </LogoWrapper>
        </PageWrapper>
    );
}

export default MainPage;