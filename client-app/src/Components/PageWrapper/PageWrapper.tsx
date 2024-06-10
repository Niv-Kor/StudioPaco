import { FC, PropsWithChildren } from 'react';
import { ContentWrapper, Wrapper } from './PageWrapper.style';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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