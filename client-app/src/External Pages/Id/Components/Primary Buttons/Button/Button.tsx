import { FC } from "react";
import { Container, Icon } from "./Button.style";
import { IPrimaryButtonConfig } from "../types";

interface IContactButton extends IPrimaryButtonConfig {
    onClick: VoidFunction;
}

const PrimaryButton: FC<IContactButton> = ({ icon, href, onClick }) => {
    return (
        <Container onClick={onClick}>
            <Icon src={icon} alt="" />
        </Container>
    )
}

export default PrimaryButton;