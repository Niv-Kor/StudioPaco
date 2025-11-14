import { FC, useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf";
import Presentation from "./presentation.pdf";
import { DocumentCallback } from "react-pdf/dist/shared/types";
import {
    Wrapper,
    ButtonsLayout,
    DocumentContainer,
    PageNumber,
    Button, Loader,
} from "./PresentationViewer.style";
import { isMobile } from "../../Utils/Theme";
import useScreenSize from "../../shared/hooks/useScreenSize";

const PresentationViewer: FC = () => {
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isHovered, setHovered] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const { width: screenWidth } = useScreenSize();
    const width = isMobile() ? screenWidth * .9 : 900;

    useEffect(() => {
        const element = wrapperRef.current;
        if (!element) return;

        const handleWheel = (ev: WheelEvent) => {
            ev.preventDefault();
            ev.stopPropagation();

            if (ev.deltaY > 0) onNextPage();
            else if (ev.deltaY < 0) onPreviousPage();
        };

        element.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            element.removeEventListener('wheel', handleWheel);
        };
    }, [totalPages]);

    const onDocumentLoadSuccess = (ev: DocumentCallback): void => {
        setTotalPages(ev.numPages);
    }

    const onPreviousPage = (): void => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    }

    const onNextPage = (): void => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    }
    
    return (
        <Wrapper
            ref={wrapperRef}
            width={width}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <DocumentContainer>
                <Document
                    file={Presentation}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        pageIndex={currentPage}
                        width={width}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        error={<Loader />}
                        loading={<Loader />}
                    />
                </Document>
                {isMobile() ? (
                    <>
                        <PageNumber>
                            {currentPage + 1}
                        </PageNumber>
                        <ButtonsLayout>
                            <Button
                                onClick={onPreviousPage}
                                disabled={currentPage <= 0}
                            >
                                🠈
                            </Button>
                            <Button
                                onClick={onNextPage}
                                disabled={currentPage >= totalPages - 1}
                            >
                                🠊
                            </Button>
                        </ButtonsLayout>
                    </>
                ) : (
                    isHovered && (
                        <>
                            <PageNumber>
                                {currentPage + 1}
                            </PageNumber>
                            <ButtonsLayout>
                                <Button
                                    onClick={onPreviousPage}
                                    disabled={currentPage <= 0}
                                >
                                    🠈
                                </Button>
                                <Button
                                    onClick={onNextPage}
                                    disabled={currentPage >= totalPages - 1}
                                >
                                    🠊
                                </Button>
                            </ButtonsLayout>
                        </>
                    ))}
            </DocumentContainer>
        </Wrapper>
    );
}

export default PresentationViewer;