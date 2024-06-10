import { Logo } from "./MainPage.style";
import LogoImg from "./title.svg";

const MainPageContent: React.FC = () => {
    return (
        <Container>
            <Logo src={LogoImg} alt={''} />
        </Container>
    );
}

export default MainPageContent;