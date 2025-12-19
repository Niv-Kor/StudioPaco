import { FC } from "react";
import { Container, Icon, Label } from "./Button.style";
import { IContactButtonConfig } from "../types";
import useTranslation from "shared/hooks/useTranslation";

interface IContactButton extends Omit<IContactButtonConfig, "id"> {}

const ContactButton: FC<IContactButton> = ({ label, icon, href }) => {
    const { translate, textDir } = useTranslation();
    const labelText = translate(label);
    
    return (
        <Container
            href={href}
            target="_blank"
        >
            <Icon
                src={icon}
                alt={translate(labelText)}
            />
            <Label dir={textDir}>.{labelText}</Label>
        </Container>
    )
}

export default ContactButton;