import { FC, useState } from 'react';
import ParticlesBackground from 'Components/Particles Background/ParticlesBackground';
import LogoBackgroundImg from 'resources/Graphics/Logo/logo_background.svg';
import LogoForegroundImg from 'resources/Graphics/Logo/logo_foreground.png';
import SmallLogoImg from 'resources/Graphics/Logo/small_logo.svg';
import SmallLogoTextImg from 'resources/Graphics/Logo/small_logo_text.png';
import LogoTextImg from 'resources/Graphics/Logo/logo_text.svg';
import PageWrapper from 'Components/Page Wrapper/PageWrapper';
import { MainDrawer } from '../Utils/types';
import {
    LogoWrapper,
    LogoBackground,
    LogoForeground,
    LogoText,
    SmallLogo,
    LogoSubtextContainer,
    LogoSubtext
} from './MainPage.style';

const MainPage: FC = () => {
    const [openMainDrawer, setOpenMainDrawer] = useState<MainDrawer>(MainDrawer.None);

    return (
        <PageWrapper onMainDrawerChange={setOpenMainDrawer}>
            <ParticlesBackground />
            <SmallLogo
                displayed={openMainDrawer !== MainDrawer.None}
                src={SmallLogoImg}
                alt={''}
            />
            <SmallLogo
                displayed={openMainDrawer === MainDrawer.About}
                src={SmallLogoTextImg}
                alt={''}
            />
            <LogoWrapper displayed={openMainDrawer === MainDrawer.None}>
                <LogoBackground src={LogoBackgroundImg} alt={''} />
                <LogoForeground src={LogoForegroundImg} alt={''} />
                <LogoText src={LogoTextImg} alt={''} />
                <LogoSubtextContainer>
                    <LogoSubtext>design</LogoSubtext>
                    <LogoSubtext>.</LogoSubtext>
                    <LogoSubtext>architecture</LogoSubtext>
                </LogoSubtextContainer>
            </LogoWrapper>
        </PageWrapper>
    );
}

export default MainPage;