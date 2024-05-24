import { Container } from "./MainPageFooter.style";
import SocialIcon from "./SocialIcon/SocialIcon";

const MainPageFooter: React.FC = () => {
    return (
        <Container>
            <SocialIcon
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"}
                name={"whatsapp"}
            />
        </Container>
    );
}

export default MainPageFooter;