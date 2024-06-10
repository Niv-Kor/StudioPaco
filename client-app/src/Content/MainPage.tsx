import { FC } from 'react';
import { Logo } from './MainPage.style';
import LogoImg from './title.svg';
import PageWrapper from '../Components/PageWrapper/PageWrapper';

const MainPage: FC = () => {
    return (
        <PageWrapper>
            <Logo src={LogoImg} alt={''} />
        </PageWrapper>
    );
}

export default MainPage;