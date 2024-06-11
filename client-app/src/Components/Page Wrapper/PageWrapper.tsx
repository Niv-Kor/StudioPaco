import { FC, PropsWithChildren } from 'react';
import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import { ContentWrapper, Wrapper } from './PageWrapper.style';

const PageWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer />
        </Wrapper>
    );
}

export default PageWrapper;