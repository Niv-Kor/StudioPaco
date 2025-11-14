import { FC, useState, useEffect, useRef } from 'react';
import { IDrawer } from 'Utils/types';
import { isMobile } from 'Utils/Theme';
import useBackButton from "shared/hooks/useBackButton";
import ProfileImgSrc from 'resources/Graphics/About/Amit-BW.png';
import useTranslation from "shared/hooks/useTranslation";
import useScreenSize from "shared/hooks/useScreenSize";
import { RTLTextAlignClassName } from "Utils/constants";
import { Paragraphs } from "./consts";
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

interface IAboutDrawer extends IDrawer {
    openDelay: number;
}

const AboutDrawer: FC<IAboutDrawer> = ({
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
    const [textScrollOffset, setTextScrollOffset] = useState<number>(0);
    const [profileImageTimeout, setProfileImageTimeout] = useState<NodeJS.Timeout>();
    const { translate, textDir } = useTranslation();
    const { width, height } = useScreenSize();
    const textContent = (
        <Content
            displayed={enterState}
            screenWidth={width}
            screenHeight={height}
        >
            <Paragraph
                className={RTLTextAlignClassName}
                dangerouslySetInnerHTML={{ __html: translate(Paragraphs?.[0]) }}
                dir={textDir}
            />
            <CenterParagraph
                className={RTLTextAlignClassName}
                dangerouslySetInnerHTML={{ __html: translate(Paragraphs?.[1]) }}
                dir={textDir}
            />
            <Paragraph
                className={RTLTextAlignClassName}
                dangerouslySetInnerHTML={{ __html: translate(Paragraphs?.[2]) }}
                dir={textDir}
            />
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