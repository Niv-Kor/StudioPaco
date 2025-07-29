import { FC, useMemo, useRef } from 'react';
import { IProjectData } from '../types';
import BackButton from 'resources/Graphics/Projects/Back-Button.svg';
import useBackButton from "shared/hooks/useBackButton";
import Scrollbar from "Components/Scrollbar/Scrollbar";
import useScrollProps from "Components/Scrollbar/useScrollProps";
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
    ContentContainer,
} from './ProjectInfo.style';

interface IProjectInfo {
    open: boolean;
    categoryName: string;
    data: IProjectData | undefined;
    offset: number;
    onClose: () => void;
}

const ProjectInfo: FC<IProjectInfo> = ({
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
    const rightOffset = offset - StripWidth + 1;
    const {
        offsetHeight,
        scrollHeight,
        scrollPercent,
        scrollbarProps
    } = useScrollProps(containerRef, StripWidth, rightOffset, open);
    
    const overscroll = useMemo<boolean>(() => {
        const scrollFromTop = (1 - scrollPercent) * (scrollHeight - offsetHeight);
        return scrollFromTop > offsetHeight * .6
    }, [offsetHeight, scrollPercent]);
    
    useBackButton("Project Info", onClose, open);

    return (
        <>
            {isMobile() && <BackgroundLine open={open} />}
            <Container
                ref={containerRef}
                offset={offset}
                open={open}
            >
                <Scrollbar {...scrollbarProps} />
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
                <ContentContainer>
                    {isMobile() && (
                        <BackButtonWrapper
                            onClick={onClose}
                            overscroll={false}
                        >
                            <BackButtonLabel>{categoryName}</BackButtonLabel>
                            <BackButtonIcon src={BackButton} alt={"back"} />
                        </BackButtonWrapper>
                    )}
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
                    <ImagesWrapper rightOffset={rightOffset}>
                        {[...images]?.splice(1).map(image => (
                            <img
                                key={image}
                                src={image}
                                alt={""}
                            />
                        ))}
                    </ImagesWrapper>
                </ContentContainer>
            </Container>
        </>
    );
}

export default ProjectInfo;