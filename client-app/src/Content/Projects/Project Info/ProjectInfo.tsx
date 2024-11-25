import { useEffect, useRef, useState } from 'react';
import { IProjectData } from '../types';
import BackButton from 'resources/Graphics/Projects/Back-Button.svg';
import { StripWidth } from '../constants';
import { isMobile } from 'Utils/Theme';
import {
    Container,
    BackgroundLine,
    HeaderImage,
    ImagesWrapper,
    BackButtonWrapper,
    BackButtonIcon,
    BackButtonLabel,
    InfoParagraph,
    ProjectInfoSection,
    ProjectInfoRow,
    Scrollbar
} from './ProjectInfo.style';

interface IProjectInfo {
    open: boolean;
    categoryName: string;
    data: IProjectData | undefined;
    offset: number;
    onClose: () => void;
}

const ProjectInfo: React.FC<IProjectInfo> = ({
    open,
    categoryName,
    data,
    offset,
    onClose
}) => {
    const {
        name = "",
        location = "",
        programma = "",
        entity = "",
        year = 0,
        images = []
    } = data ?? {};
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPercent, setScrollPercent] = useState<number>(1);
    const [overscroll, setOverscroll] = useState<boolean>(false);
    const [scrollTop, setScrollTop] = useState<number>(0);

    useEffect(() => {
        if (!containerRef?.current) return;

        const container = containerRef?.current;
        const onScroll = (ev: Event) => {
            const target = ev.target as HTMLInputElement;
            const { scrollTop, offsetHeight, scrollHeight } = target;
            const percent = 1 - scrollTop / (scrollHeight - offsetHeight);
            const pageHeight = document.body.clientHeight;
            
            setScrollTop((1 - percent) * (pageHeight - StripWidth));
            setOverscroll(scrollTop > offsetHeight * .6);
            setScrollPercent(percent);
        }

        container.addEventListener("scroll", onScroll);

        return () => {
            container.removeEventListener("scroll", onScroll);
        }
    }, [containerRef]);

    return (
        <>
            {isMobile() && <BackgroundLine open={open} />}
            <Container
                ref={containerRef}
                offset={offset}
                open={open}
            >
                <Scrollbar
                    width={StripWidth}
                    x={offset - StripWidth}
                    y={scrollTop}
                />
                {!isMobile() && (
                    <BackButtonWrapper
                        onClick={onClose}
                        overscroll={overscroll}
                    >
                        <BackButtonIcon src={BackButton} alt={"back"} />
                        <BackButtonLabel>{categoryName}</BackButtonLabel>
                    </BackButtonWrapper>
                )}
                <HeaderImage
                    src={images?.[0]}
                    alt={name}
                    scrollPercent={scrollPercent}
                    overscroll={overscroll}
                />
                <InfoParagraph overscroll={overscroll}>
                    <ProjectInfoSection>
                        <ProjectInfoRow>.{name}</ProjectInfoRow>
                        {isMobile() && (
                            <BackButtonWrapper
                                onClick={onClose}
                                overscroll={false}
                            >
                                <BackButtonLabel>{categoryName}</BackButtonLabel>
                                <BackButtonIcon src={BackButton} alt={"back"} />
                            </BackButtonWrapper>
                        )}
                    </ProjectInfoSection>
                    <ProjectInfoSection>
                        <ProjectInfoRow>Location: {location}</ProjectInfoRow>
                        <ProjectInfoRow>Programma: {programma}</ProjectInfoRow>
                    </ProjectInfoSection>
                    <ProjectInfoSection>
                        <ProjectInfoRow>{year}</ProjectInfoRow>
                        <ProjectInfoRow>at {entity}</ProjectInfoRow>
                    </ProjectInfoSection>
                </InfoParagraph>
                <ImagesWrapper>
                    {images?.toSpliced(0, 1).map(image => (
                        <img
                            key={image}
                            src={image}
                            alt={""}
                        />
                    ))}
                </ImagesWrapper>
            </Container>
        </>
    );
}

export default ProjectInfo;