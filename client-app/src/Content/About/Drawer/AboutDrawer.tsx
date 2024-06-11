import { FC } from 'react';
import {
    TextContainer,
    Content,
    Paragraph,
    CenterParagraph,
    ProfileImage
} from './AboutDrawer.style';

interface IAboutDrawer {
    open: boolean;
}

const AboutDrawer: FC<IAboutDrawer> = ({ open }) => {
    return (
        <>
            <ProfileImage open={open} />
            <TextContainer open={open}>
                <Content>
                    <Paragraph>
                        The essence of design lies in its timeless quality - Inspired by the beauty of natural and social phenomena.
                        Well-designed spaces should feel like a natural extension of their environment, as if they have always been part of the landscape.
                    </Paragraph>
                    <CenterParagraph>
                        Based in Tel-Aviv, Studio Paco is led by architect Amit Korach, a graduate of Tel Aviv University in 2018.
                        With expertise spanning residential and commercial architecture, public installations, and product design,
                        the studio shapes how the spaces we inhabit make us feel, dream, and perceive our own essence.
                    </CenterParagraph>
                    <Paragraph>
                        Through a closely collaborative process, the client's vision is woven into every aspect of the
                        design with dedicated attention to details - ensuring a profound sense of personal connection.
                        From material choices to choreographed spatial flow, the sensory experience of each creation
                        is composed to inspire an experience of continual discovery.
                    </Paragraph>
                </Content>
            </TextContainer>
        </>
    );
}

export default AboutDrawer;