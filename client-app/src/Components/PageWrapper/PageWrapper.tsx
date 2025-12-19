import { FC, PropsWithChildren } from 'react';
import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import { MainDrawer } from 'Utils/types';
import { ContentWrapper, Wrapper } from './PageWrapper.style';
import useTranslation from "shared/hooks/useTranslation";

interface IPageWrapper {
    onMainDrawerChange: (drawer: MainDrawer) => void;
    forceCloseDrawers: boolean;
}

const PageWrapper: FC<PropsWithChildren<IPageWrapper>> = ({
    children,
    onMainDrawerChange,
    forceCloseDrawers,
}) => {
    const { isRtl } = useTranslation();
    
    return (
        <Wrapper rtl={isRtl}>
            <Header
                onDrawerChange={onMainDrawerChange}
                forceCloseDrawers={forceCloseDrawers}
            />
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer />
        </Wrapper>
    );
}

export default PageWrapper;