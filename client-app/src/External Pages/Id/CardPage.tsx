import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./Components/Background/Background";
import Layout from "./Components/Layout/Layout";
import Autograph from "./Components/Autograph/Autograph";
import ProfileImgSrc from 'resources/Graphics/Card/profile.png';
import { ContentWrapper, ProfileImage } from "./CardPage.style";
import ContactButtons from "./Components/Contact Buttons/ContactButtons";
import LanguageButton from "./Components/Language Button/LanguageButton";
import ProjectsFooter from "./Components/Projects Footer/ProjectsFooter";
import { isPhone } from "Utils/Theme";
import About from "./Components/About/About";

const CardPage: FC = () => {
    const navigate = useNavigate();
    const shouldRender = isPhone();

    //redirect to the main webpage if the current device is not a phone
    useEffect(() => {
        if (!shouldRender) navigate("/", { replace: true });
    }, [navigate, shouldRender]);

    return shouldRender ? (
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
    ) : null;
}

export default CardPage;