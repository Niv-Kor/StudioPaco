import { FC, useState, useEffect } from 'react';
import { IDrawer } from 'Utils/types';
import ProfileImgSrc from 'resources/Graphics/About/Amit-BW.png';
import LogoForegroundImg from 'resources/Graphics/Logo/logo_foreground.png';
import {
    Wrapper,
    TextContainer,
    Content,
    Paragraph,
    CenterParagraph,
    ProfileImage,
    LogoForeground
} from './AboutDrawer.style';

const AboutDrawer: FC<IDrawer> = ({
    open,
    openDelay
}) => {
    const [enterState, setEnterState] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        const adjustWidth = () => setScreenWidth(document.body.clientWidth);
        window.addEventListener("resize", adjustWidth);
        adjustWidth();

        return () => {
            window.removeEventListener("resize", adjustWidth);
        }
    }, []);

    useEffect(() => {
        if (open && openDelay > 0) 
            setTimeout(() => setEnterState(true), openDelay * 1000);
        else setEnterState(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <Wrapper open={enterState}>
            <ProfileImage
                src={ProfileImgSrc}
                alt={''}
                open={enterState}
            />
            <TextContainer open={enterState}>
                <Content screenWidth={screenWidth}>
                    <LogoForeground src={LogoForegroundImg} alt={''} />
                    <Paragraph>
                        The essence of design lies in its <b>timeless quality</b> - Inspired by the beauty of natural and social phenomena.
                        Well-designed spaces should feel like <b>a natural extension</b> of their environment, as if they have always been part of the landscape.
                    </Paragraph>
                    <CenterParagraph>
                        Based in Tel-Aviv, <b>Studio Paco</b> is led by architect Amit Korach,<br />
                        a graduate of Tel Aviv University in 2018.
                        With expertise spanning residential and commercial architecture, public installations, and product design,
                        the studio shapes how the spaces we inhabit make us feel, dream, and perceive our own essence.
                    </CenterParagraph>
                    <Paragraph>
                        Through a closely collaborative process, the client's vision is woven into every aspect of the
                        design with dedicated attention to details - ensuring a profound sense of <b>personal connection</b>.
                        From material choices to choreographed spatial flow, the sensory experience of each creation
                        is composed to inspire an experience of <b>continual discovery</b>.
                    </Paragraph>
                </Content>
            </TextContainer>
        </Wrapper>
    );
}

export default AboutDrawer;