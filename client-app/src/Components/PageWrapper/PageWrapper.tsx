import { FC } from 'react';
import { Wrapper } from './MainPage.style';
import Content from './Content/MainPageContent';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const MainPage: FC = () => {
    return (
        <Wrapper>
            <Header />
            <Content />
            <Footer />
        </Wrapper>
    );
}

export default MainPage;