import { FC, useState } from 'react';
import { ISocialIconConfig } from '../types';
import {
    Wrapper, Icon, ValueLabel, ClipboardIcon, IconContainer
} from './SocialIcon.style';

interface ISocialIcon {
    config: ISocialIconConfig;
}

const SocialIcon: FC<ISocialIcon> = ({ config }) => {
    const {
        key,
        iconSrc,
        value,
        clipboardString,
        href
    } = config;
    const [hovered, setHoverState] = useState<boolean>(false);

    const onClick = () => {
        if (!!clipboardString) void navigator.clipboard.writeText(clipboardString);
        if (!!href) window.open(href, '_blank');
    }

    return (
        <Wrapper
            onClick={onClick}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
        >
            <IconContainer>
                <Icon src={iconSrc} alt={key} />
            </IconContainer>
            {hovered && (
                <>
                    <ValueLabel>{value}</ValueLabel>
                    {!!clipboardString && (
                        <ClipboardIcon
                            src={""}
                            alt={'Copy to clipboard'}
                        />
                    )}
                </>
            )}
        </Wrapper>
    );
}

export default SocialIcon;