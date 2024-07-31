import { FC, useEffect, useState } from 'react';
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
    SmallTextLogoContainer,
    SmallTextLogo,
    LogoSubtextWrapper,
    LogoSubtextContainer,
    LogoSubtext,
    LogoSubtextCursor
} from './MainPage.style';

const MainPage: FC = () => {
    const [openMainDrawer, setOpenMainDrawer] = useState<MainDrawer>(MainDrawer.None);
    const [forceCloseDrawers, setForceCloseDrawers] = useState<boolean>(false);

    useEffect(() => {
        if (forceCloseDrawers) setForceCloseDrawers(false);
    }, [forceCloseDrawers]);

    return (
        <PageWrapper
            onMainDrawerChange={setOpenMainDrawer}
            forceCloseDrawers={forceCloseDrawers}
        >
            <ParticlesBackground />
            <SmallLogo
                displayed={openMainDrawer !== MainDrawer.None}
                src={SmallLogoImg}
                alt={''}
                onClick={() => setForceCloseDrawers(true)}
            />
            <SmallTextLogoContainer>
                <LogoSubtextCursor
                    displayed={openMainDrawer === MainDrawer.About}
                    startOffset={220}
                    endOffset={407}
                    moveDuration={2}
                    top={75}
                />
                <SmallTextLogo
                    displayed={openMainDrawer === MainDrawer.About}
                    src={SmallLogoTextImg}
                    alt={''}
                    onClick={() => setForceCloseDrawers(true)}
                />
            </SmallTextLogoContainer>
            <LogoWrapper displayed={openMainDrawer === MainDrawer.None}>
                <LogoBackground src={LogoBackgroundImg} alt={''} />
                <LogoForeground src={LogoForegroundImg} alt={''} />
                <LogoText src={LogoTextImg} alt={''} />
                <LogoSubtextWrapper>
                    <LogoSubtextCursor
                        displayed={openMainDrawer === MainDrawer.None}
                        startOffset={130}
                        endOffset={370}
                        moveDuration={2.5}
                        top={2}
                    />
                    <LogoSubtextContainer displayed={openMainDrawer === MainDrawer.None} >
                        <LogoSubtext>design</LogoSubtext>
                        <LogoSubtext>.</LogoSubtext>
                        <LogoSubtext>architecture</LogoSubtext>
                    </LogoSubtextContainer>
                </LogoSubtextWrapper>
            </LogoWrapper>
        </PageWrapper>
    );
}

export default MainPage;