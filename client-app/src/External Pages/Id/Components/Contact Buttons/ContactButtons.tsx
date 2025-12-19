import { FC } from "react";
import { Container } from "./ContactButtons.style";
import { CONTACT_BUTTONS_CONFIG } from "./consts";
import ContactButton from "./Button/Button";

const ContactButtons: FC = () => {
    return (
        <Container>
            {CONTACT_BUTTONS_CONFIG.map(({ id, ...config }) => (
                <ContactButton
                    key={id}
                    {...config}
                />
            ))}
        </Container>
    )
}

export default ContactButtons;