import { IPrimaryButtonConfig, PrimaryButtonType } from "./types";
import { SOCIAL_LINKS } from "../../../../shared/consts";

export const PRIMARY_BUTTONS_CONFIG: Record<PrimaryButtonType, IPrimaryButtonConfig> = {
    [PrimaryButtonType.Share]: {
        icon: "",
        href: "",
    },
    [PrimaryButtonType.Phone]: {
        icon: "",
        href: "",
    },
    [PrimaryButtonType.Contacts]: {
        icon: "",
        href: "",
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