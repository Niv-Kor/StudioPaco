import { FC, useState, useEffect, useRef } from 'react';
import { IDrawer } from 'Utils/types';
import { isMobile } from 'Utils/Theme';
import useBackButton from "../../shared/hooks/useBackButton";
import ProfileImgSrc from 'resources/Graphics/About/Amit-BW.png';
import {
    Wrapper,
    ScrollWrapper,
    HeaderMask,
    HeaderBackground,
    TextContainer,
    Content,
    Paragraph,
    CenterParagraph,
    ProfileImage,
} from './AboutDrawer.style';

const AboutDrawer: FC<IDrawer> = ({
    open,
    openDelay,
    onClose
}) => {
    const initialized = useRef<number>(0);
    const wrapperContainer = useRef<HTMLDivElement>(null)
    const mobile = isMobile();
    const [enterState, setEnterState] = useState<boolean>(false);
    const [isImageOpen, setImageOpen] = useState<boolean>(false);
    const [closingFlag, setClosingFlag] = useState<boolean>(false);
    const [textCloseState, setTextCloseState] = useState<boolean>(false);
    const [screenSize, setScreenSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
    const [textScrollOffset, setTextScrollOffset] = useState<number>(0);
    const [profileImageTimeout, setProfileImageTimeout] = useState<NodeJS.Timeout>();
    const textContent = (
        <Content
            displayed={enterState}
            screenWidth={screenSize.width}
            screenHeight={screenSize.height}
        >
            <Paragraph>
                The essence of design lies in its <b>timeless quality</b> - Inspired by the beauty of natural and social phenomena.
                Well-designed spaces should feel like <b>a natural extension</b> of their environment, as if they have always been part of the landscape.
            </Paragraph>
            <CenterParagraph>
                Based in Tel-Aviv, <b>Studio Paco</b> is led by architect Amit Korach,{isMobile() ? " " :  <br />}
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
    );
    
    useBackButton("About", onClose, open);
    useEffect(() => {
        if (mobile) {
            const container = wrapperContainer?.current;
            const onScroll = (): void => setTextScrollOffset(container?.scrollTop || 0);
            container &&  container.addEventListener('scroll', onScroll)

            return () => {
                container?.removeEventListener('scroll', onScroll);
            }
        }
    }, [wrapperContainer, mobile]);

    useEffect(() => {
        const adjustWidth = () => setScreenSize({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        });

        window.addEventListener("resize", adjustWidth);
        adjustWidth();

        return () => {
            window.removeEventListener("resize", adjustWidth);
        }
    }, []);

    useEffect(() => {
        if (open && openDelay > 0) setTimeout(() => setEnterState(open), openDelay * 1000);
        else setEnterState(open);
    }, [open]);
    
    useEffect(() => {
        if (enterState) {
            setProfileImageTimeout(
                setTimeout(() => {
                    setImageOpen(enterState)
                }, 250)
            );
        }
        else {
            clearTimeout(profileImageTimeout);
            setImageOpen(enterState);
        }
    }, [enterState]);

    useEffect(() => {
        if (initialized.current >= 2) {
            if (enterState) setTextCloseState(false);
            else {
                setClosingFlag(true);
                setTimeout(() => {
                    setClosingFlag(false);
                    setTextCloseState(true);
                }, 150);
            }
        }
        else initialized.current++;
    }, [enterState]);

    return (
        <Wrapper
            ref={wrapperContainer}
            open={enterState}
            scrollTop={textScrollOffset}
        >
            {isMobile() ? (
                <ScrollWrapper open={enterState}>
                    <HeaderBackground />
                    {textContent}
                </ScrollWrapper>
            ) : (
                <>
                    <ProfileImage
                        src={ProfileImgSrc}
                        alt={''}
                        open={isImageOpen}
                    />
                    <TextContainer open={enterState || closingFlag} closing={textCloseState}>
                        {textContent}
                    </TextContainer>
                </>
            )}
            <HeaderMask open={enterState} />
        </Wrapper>
    );
}

export default AboutDrawer;