import { FC, PropsWithChildren } from 'react';
import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import { MainDrawer } from '../../Utils/types';
import { ContentWrapper, Wrapper } from './PageWrapper.style';

interface IPageWrapper {
    onMainDrawerChange: (drawer: MainDrawer) => void;
}

const PageWrapper: FC<PropsWithChildren<IPageWrapper>> = ({
    children,
    onMainDrawerChange
}) => {
    return (
        <Wrapper>
            <Header onDrawerChange={onMainDrawerChange} />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer />
        </Wrapper>
    );
}

export default PageWrapper;