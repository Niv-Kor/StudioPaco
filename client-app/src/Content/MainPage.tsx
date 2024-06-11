import { FC } from 'react';
import LogoImg from './title.svg';
import PageWrapper from 'Components/Page Wrapper/PageWrapper';
import { Logo } from './MainPage.style';

const MainPage: FC = () => {
    return (
        <PageWrapper>
            <Logo src={LogoImg} alt={''} />
        </PageWrapper>
    );
}

export default MainPage;