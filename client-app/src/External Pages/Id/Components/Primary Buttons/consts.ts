import { IPrimaryButtonConfig, PrimaryButtonType } from "./types";
import ShareIcon from "resources/Graphics/Card/share.svg";
import PhoneIcon from "resources/Graphics/Card/phone.svg";
import ContactIcon from "resources/Graphics/Card/contact.svg";
import { SOCIAL_LINKS } from "shared/consts";

export const PRIMARY_BUTTONS_CONFIG: Record<PrimaryButtonType, IPrimaryButtonConfig> = {
    [PrimaryButtonType.Share]: {
        icon: ShareIcon,
    },
    [PrimaryButtonType.Phone]: {
        icon: PhoneIcon,
    },
    [PrimaryButtonType.Contacts]: {
        icon: ContactIcon,
    },
};

export const VCARD = [
    'BEGIN:VCARD',
    'VERSION=3.0',
    'N:Korach;Amit;;;',
    'FN:Amit Korach',
    `TEL;TYPE=CELL:${SOCIAL_LINKS.phone}`,
    `EMAIL:${SOCIAL_LINKS.email}`,
    'ORG:Studio Paco',
    'TITLE:Architect',
    'END:VCARD',
];