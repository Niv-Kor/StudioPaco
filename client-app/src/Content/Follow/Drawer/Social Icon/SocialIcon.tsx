import { FC, useEffect, useState } from 'react';
import { ISocialIconConfig } from '../../types';
import {
    Wrapper,
    IconContainer,
    Icon,
    ValueContainer,
    ValueLabel,
    ClipboardIcon
} from './SocialIcon.style';

interface ISocialIcon {
    config: ISocialIconConfig;
    enabled: boolean;
}

const SocialIcon: FC<ISocialIcon> = ({ config, enabled }) => {
    const {
        key,
        iconSrc,
        value,
        clipboardString,
        href
    } = config;
    const [hovered, setHoverState] = useState<boolean>(false);
    const [clipboardAck, setClipboardAck] = useState<boolean>(false);

    useEffect(() => {
        if ((!enabled || !hovered) && clipboardAck) setClipboardAck(false);
    }, [enabled, clipboardAck, hovered]);

    const onClick = () => {
        if (!!clipboardString) {
            void navigator.clipboard.writeText(clipboardString);
            setClipboardAck(true);
        }
        if (!!href) window.open(href, '_blank');
    }

    return (
        <Wrapper
            enabled={enabled}
            onMouseLeave={() => setHoverState(false)}
        >
            <IconContainer>
                <Icon
                    src={iconSrc}
                    alt={key}
                    onMouseEnter={() => setHoverState(true)}
                    onClick={onClick}
                />
            </IconContainer>
            <ValueContainer
                hovered={hovered}
                onClick={() => hovered && onClick()}
            >
                <ValueLabel>.{value}</ValueLabel>
                {!!clipboardString && (
                    <>
                        <ClipboardIcon
                            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png'}
                            alt={'Copy to clipboard'}
                        />
                        {clipboardAck && (
                            <span>Copied!</span>
                        )}
                    </>
                )}
            </ValueContainer>
        </Wrapper>
    );
}

export default SocialIcon;