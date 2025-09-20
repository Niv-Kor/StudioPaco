import { FC } from 'react';
import { Container } from "./Footer.style";
import DrawerButton from "Components/DrawerButton/DrawerButton";
import useTranslation from "shared/hooks/useTranslation";
import { getDrawersConfig } from "./config";

const Footer: FC = () => {
    const translationObj = useTranslation();
    const drawers = getDrawersConfig(translationObj);
    
    return (
        <Container>
            {Object.values(drawers).map(({ id, ...restProps }) => (
                <DrawerButton
                    id={id}
                    {...restProps}
                />
            ))}
        </Container>
    );
}

export default Footer;