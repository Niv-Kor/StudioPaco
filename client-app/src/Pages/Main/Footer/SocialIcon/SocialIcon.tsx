import { IconWrapper } from "./SocialIcon.style";

interface ISocialIcon {
    src: string;
    name: string;
}

const SocialIcon: React.FC<ISocialIcon> = ({ src, name }) => {
    return (
        <IconWrapper src={src} alt={name} />
    );
}

export default SocialIcon;