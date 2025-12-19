import { FC } from "react";
import { LanguageData } from "../../../../Utils/constants";
import { getOtherLanguages } from "../../../../Components/Footer/utils";
import { Container, Label } from "./LanguageButton.style";
import useTranslation from "shared/hooks/useTranslation";

const LanguageButton: FC = () => {
    const { language, changeLanguage } = useTranslation();
    
    const onLanguageChange = (): void => {
        changeLanguage(getOtherLanguages(language)?.[0]);
    }
    
    return (
        <Container onClick={onLanguageChange}>
            <Label>
                {LanguageData?.[getOtherLanguages(language)?.[0]].idPageDisplayName}
            </Label>
        </Container>
    )
}

export default LanguageButton;