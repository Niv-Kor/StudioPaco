import { FC } from 'react';
import useBackButton from "shared/hooks/useBackButton";
import { Drawer, Header, SelectOption } from "./LanguageDrawer.style";
import { DrawerState, IDrawer } from "Utils/types";
import { SupportedLanguages } from "Utils/types";
import useTranslation from "shared/hooks/useTranslation";
import { LanguageData } from "Utils/constants";

const LanguageDrawer: FC<IDrawer> = ({
    state,
    onClose
}) => {
    const isAvailable = state === DrawerState.Open;
    const { changeLanguage } = useTranslation();
    
    useBackButton("Language", onClose, isAvailable);

    const onLanguageClick = (lang: SupportedLanguages): void => {
        changeLanguage(lang);
        onClose?.();
    }
    
    return (
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
    );
}

export default LanguageDrawer;