import { FC } from "react";
import { ScrollMode, SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import Presentation from "./presentation.pdf";
import { Container, ButtonsContainer, Wrapper, PageLabelContainer } from "./PresentationViewer.style";
import useScreenSize from "../../shared/hooks/useScreenSize";
import { isMobile } from "../../Utils/Theme";
import { WORKER_URL } from "./consts";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const PresentationViewer: FC = () => {
    const { width: screenWidth } = useScreenSize();
    const width = isMobile() ? screenWidth * .9 : 900;
    const fullScreenPluginInstance = fullScreenPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { EnterFullScreenButton } = fullScreenPluginInstance;
    const { GoToFirstPageButton, CurrentPageLabel } = pageNavigationPluginInstance;

    return (
        <Wrapper width={width}>
            <Worker workerUrl={WORKER_URL}>
                <Container>
                    <PageLabelContainer>
                        <CurrentPageLabel>
                            {(props) => <>{props.currentPage + 1}</>}
                        </CurrentPageLabel>
                    </PageLabelContainer>
                    <ButtonsContainer>
                        <GoToFirstPageButton />
                        <EnterFullScreenButton />
                    </ButtonsContainer>
                    <Viewer
                        fileUrl={Presentation}
                        plugins={[
                            fullScreenPluginInstance,
                            pageNavigationPluginInstance
                        ]}
                        scrollMode={ScrollMode.Vertical}
                        defaultScale={SpecialZoomLevel.PageWidth}
                    />
                </Container>
            </Worker>
        </Wrapper>
    );
}

export default PresentationViewer;
