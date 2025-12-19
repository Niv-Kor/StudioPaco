import { SOCIAL_LINKS } from "shared/consts";
import WebsiteIcon from "resources/Graphics/Card/website.svg";
import CallIcon from "resources/Graphics/Card/call.svg";
import EmailIcon from "resources/Graphics/Card/email.svg";
import WhatsappIcon from "resources/Graphics/Card/whatsapp.svg";
import { IContactButtonConfig } from "./types";

export const CONTACT_BUTTONS_CONFIG: IContactButtonConfig[] = [
    {
        id: "website",
        label: {
            en: "website",
            he: "אתר",
        },
        icon: WebsiteIcon,
        href: SOCIAL_LINKS.website,
    },
    {
        id: "office",
        label: {
            en: "office",
            he: "משרד",
        },
        icon: CallIcon,
        href: `tel:${SOCIAL_LINKS.phone.substring(1)}`,
    },
    {
        id: "email",
        label: {
            en: "email",
            he: "דוא\"ל",
        },
        icon: EmailIcon,
        href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
        id: "whatsapp",
        label: {
            en: "whatsapp",
            he: "וואטסאפ",
        },
        icon: WhatsappIcon,
        href: `https://wa.me/${SOCIAL_LINKS.phone.substring(1)}`,
    },
];