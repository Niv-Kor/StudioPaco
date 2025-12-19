import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./Components/Background/Background";
import Layout from "./Components/Layout/Layout";
import Autograph from "./Components/Autograph/Autograph";
import ProfileImgSrc from 'resources/Graphics/About/Amit-BW.png';
import { ContentWrapper, ProfileImage } from "./CardPage.style";
import ContactButtons from "./Components/Contact Buttons/ContactButtons";
import LanguageButton from "./Components/Language Button/LanguageButton";
import ProjectsFooter from "./Components/Projects Footer/ProjectsFooter";
import useScreenSize from "../../shared/hooks/useScreenSize";
import { isPhone } from "../../Utils/Theme";
import About from "./Components/About/About";

const CardPage: FC = () => {
    const navigate = useNavigate();
    const { width } = useScreenSize();

    //redirect to the main webpage if the current device is not a phone
    useEffect(() => {
        if (!isPhone()) navigate("/", { replace: true });
    }, [width, navigate]);

    return (
        <>
            <Layout>
                <ContentWrapper>
                    <Background />
                    <LanguageButton />
                    <Autograph />
                    <ContactButtons />
                    <ProfileImage src={ProfileImgSrc} alt="" />
                    <div style={{ height: 0 }}>
                        <About />
                        <ProjectsFooter />
                    </div>
                </ContentWrapper>
            </Layout>
        </>
    )
}

export default CardPage;