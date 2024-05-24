import { Wrapper } from "./MainPage.style";
import Content from './Content/MainPageContent';
import Footer from './Footer/MainPageFooter';

const MainPage: React.FC = () => {
    return (
        <Wrapper>
            <Content />
            <Footer />
        </Wrapper>
    );
}

export default MainPage;