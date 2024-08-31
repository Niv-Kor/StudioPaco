import { ISocialIconConfig } from './types';
import FacebookIcon from 'resources/Graphics/Follow/facebook.svg';
import InstagramIcon from 'resources/Graphics/Follow/instagram.svg';
import LinkedinIcon from 'resources/Graphics/Follow/linkedin.svg';
import WhatsappIcon from 'resources/Graphics/Follow/whatsapp.svg';
import TelephoneIcon from 'resources/Graphics/Follow/phone.svg';
import EmailIcon from 'resources/Graphics/Follow/email.svg';
import { isMobile } from 'Utils/Theme';

export const SocialMethods: Array<ISocialIconConfig> = [
    {
        key: 'Facebook',
        iconSrc: FacebookIcon,
        value: 'facebook.com/Amit.Paco',
        href: 'https://facebook.com/Amit.Paco',
    },
    {
        key: 'Instagram',
        iconSrc: InstagramIcon,
        value: 'instagram.com/amitpaco',
        href: `https://instagram.com/_studio.paco`,
    },
    {
        key: 'linkedIn',
        iconSrc: LinkedinIcon,
        value: 'linkedin.com/company/studiopaco',
        href: 'https://linkedin.com/company/studiopaco',
    },
    {
        key: 'Whatsapp',
        iconSrc: WhatsappIcon,
        value: '972.0506.7575.81',
        href: `https://wa.me/972506757581`,
    },
    {
        key: 'Telephone',
        iconSrc: TelephoneIcon,
        value: '972.0506.7575.81',
        clipboardString: '+972506757581',
        href: isMobile() ? 'tel:972506757581' : ''
    },
    {
        key: 'Email',
        iconSrc: EmailIcon,
        value: 'amit@studiopaco.com',
        clipboardString: 'amit@studiopaco.com',
    }
];