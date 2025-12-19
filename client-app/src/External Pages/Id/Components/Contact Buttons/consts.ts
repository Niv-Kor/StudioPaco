import { SOCIAL_LINKS } from "shared/consts";
import { IContactButtonConfig } from "./types";

export const CONTACT_BUTTONS_CONFIG: IContactButtonConfig[] = [
    {
        id: "website",
        label: {
            en: "website",
            he: "אתר",
        },
        icon: "",
        href: "https://studiopaco.com",
    },
    {
        id: "office",
        label: {
            en: "office",
            he: "משרד",
        },
        icon: "",
        href: `tel:${SOCIAL_LINKS.phone.substring(1)}`,
    },
    {
        id: "email",
        label: {
            en: "email",
            he: "דוא\"ל",
        },
        icon: "",
        href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
        id: "whatsapp",
        label: {
            en: "whatsapp",
            he: "וואטסאפ",
        },
        icon: "",
        href: `https://wa.me/${SOCIAL_LINKS.phone.substring(1)}`,
    },
];