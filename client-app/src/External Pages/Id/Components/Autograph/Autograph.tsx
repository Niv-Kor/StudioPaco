import { FC } from "react";
import { Container, StudioName, Name, Role, StudioSlogan, BottomTextWrapper, Delimiter } from "./Autograph.style";
import useTranslation from "../../../../shared/hooks/useTranslation";
import { TEXTS } from "./consts";

const Autograph: FC = () => {
    const { translate, textDir } = useTranslation();
    
    return (
        <Container>
            <Name dir={"rtl"}>
                {translate(TEXTS.name)}
            </Name>
            <Role dir={"rtl"}>
                {translate(TEXTS.role)}
            </Role>
            <Delimiter dir={textDir} />
            <BottomTextWrapper>
                <StudioName dir={textDir}>
                    {translate(TEXTS.studioName)}
                </StudioName>
                <StudioSlogan dir={textDir}>
                    {translate(TEXTS.studioSlogan)}
                </StudioSlogan>
            </BottomTextWrapper>
        </Container>
    )
}

export default Autograph;