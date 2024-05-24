import { Logo } from "./MainPageContent.style";
import LogoImg from "./title.svg";

const MainPageContent: React.FC = () => {
    return (
        <>
            <Logo src={LogoImg} alt={''} />
        </>
    );
}

export default MainPageContent;