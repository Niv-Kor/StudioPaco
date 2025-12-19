import { ISocialIconConfig } from './types';
import FacebookIcon from 'resources/Graphics/Follow/facebook.svg';
import InstagramIcon from 'resources/Graphics/Follow/instagram.svg';
import LinkedinIcon from 'resources/Graphics/Follow/linkedin.svg';
import WhatsappIcon from 'resources/Graphics/Follow/whatsapp.svg';
import TelephoneIcon from 'resources/Graphics/Follow/phone.svg';
import EmailIcon from 'resources/Graphics/Follow/email.svg';
import { isMobile } from 'Utils/Theme';
import { SOCIAL_LINKS } from "../../shared/consts";

export const SocialMethods: Array<ISocialIconConfig> = [
    {
        key: 'Facebook',
        iconSrc: FacebookIcon,
        value: SOCIAL_LINKS.facebook,
        href: `https://${SOCIAL_LINKS.facebook}`,
    },
    {
        key: 'Instagram',
        iconSrc: InstagramIcon,
        value: SOCIAL_LINKS.instagram,
        href: `https://${SOCIAL_LINKS.instagram}`,
    },
    {
        key: 'linkedIn',
        iconSrc: LinkedinIcon,
        value: SOCIAL_LINKS.linkedin,
        href: `https://${SOCIAL_LINKS.linkedin}`,
    },
    {
        key: 'Whatsapp',
        iconSrc: WhatsappIcon,
        value: '972.0506.7575.81',
        href: `https://wa.me/${SOCIAL_LINKS.phone.substring(1)}`,
    },
    {
        key: 'Telephone',
        iconSrc: TelephoneIcon,
        value: '972.0506.7575.81',
        clipboardString: SOCIAL_LINKS.phone,
        href: isMobile() ? `tel:${SOCIAL_LINKS.phone.substring(1)}` : ''
    },
    {
        key: 'Email',
        iconSrc: EmailIcon,
        value: SOCIAL_LINKS.email,
        clipboardString: SOCIAL_LINKS.email,
    }
];