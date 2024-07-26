import { useEffect, useRef, useState } from 'react';
import { IProjectData } from '../types';
import {
    Container,
    HeaderImage,
    ImagesWrapper,
    BackButtonWrapper,
    BackButtonIcon,
    BackButtonLabel,
    InfoParagraph,
    ProjectInfoSection,
    ProjectInfoRow
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

    useEffect(() => {
        if (!containerRef?.current) return;

        const container = containerRef?.current;
        const onScroll = (ev: Event) => {
            const target = ev.target as HTMLInputElement;
            const { scrollTop, offsetHeight, scrollHeight } = target;
            const percent = 1 - scrollTop / (scrollHeight - offsetHeight);
            
            setOverscroll(scrollTop > offsetHeight * .6);
            setScrollPercent(percent);
        }

        container.addEventListener("scroll", onScroll);

        return () => {
            container.removeEventListener("scroll", onScroll);
        }
    }, [containerRef]);

    return (
        <Container
            ref={containerRef}
            offset={offset}
            open={open}
        >
            <BackButtonWrapper
                onClick={onClose}
                overscroll={overscroll}
            >
                <BackButtonIcon src={""} alt={"back"} />
                <BackButtonLabel>{categoryName}</BackButtonLabel>
            </BackButtonWrapper>
            <HeaderImage
                src={images?.[0]}
                alt={name}
                scrollPercent={scrollPercent}
                overscroll={overscroll}
            />
            <ImagesWrapper>
                {images?.toSpliced(0, 1).map(image => (
                    <img
                        key={image}
                        src={image}
                        alt={""}
                    />
                ))}
            </ImagesWrapper>
            <InfoParagraph overscroll={overscroll}>
                <ProjectInfoSection>
                    <ProjectInfoRow>.{name}</ProjectInfoRow>
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
        </Container>
    );
}

export default ProjectInfo;