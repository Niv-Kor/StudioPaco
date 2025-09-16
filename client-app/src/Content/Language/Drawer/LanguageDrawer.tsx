import { FC } from 'react';
import useBackButton from "shared/hooks/useBackButton";
import { Container, Drawer, Header, SelectOption } from "./LanguageDrawer.style";
import { SocialDrawerState } from "../../Follow/types";
import { SupportedLanguages } from "Utils/types";
import useTranslation from "shared/hooks/useTranslation";
import { LanguageData } from "Utils/constants";

interface ISocialDrawer {
    state: SocialDrawerState;
    onClose: () => void;
}

const LanguageDrawer: FC<ISocialDrawer> = ({
    state,
    onClose
}) => {
    const isAvailable = state === SocialDrawerState.Open;
    const { changeLanguage } = useTranslation();
    
    useBackButton("Language", onClose, isAvailable);

    const onLanguageClick = (lang: SupportedLanguages): void => {
        changeLanguage(lang);
        onClose?.();
    }
    
    return (
        <Container>
            <Drawer
                available={isAvailable}
                state={state}
            >
                <Header />
                {Object.values(SupportedLanguages).map(((lang, index) => (
                    <SelectOption
                        key={lang}
                        index={index}
                        onClick={() => onLanguageClick(lang)}
                    >
                        {LanguageData[lang].displayName}
                    </SelectOption>
                )))}
            </Drawer>
        </Container>
    );
}

export default LanguageDrawer;