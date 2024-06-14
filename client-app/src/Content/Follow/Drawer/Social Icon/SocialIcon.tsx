import { FC, useEffect, useState } from 'react';
import { ISocialIconConfig } from '../../types';
import CopyIcon from 'resources/Graphics/Follow/copy.svg';
import {
    Wrapper,
    IconContainer,
    Icon,
    ValueContainer,
    ValueLabel,
    ClipboardIcon,
    ClipboardAck
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
                            src={CopyIcon}
                            alt={'Copy to clipboard'}
                        />
                        {clipboardAck && (
                            <ClipboardAck>Copied!</ClipboardAck>
                        )}
                    </>
                )}
            </ValueContainer>
        </Wrapper>
    );
}

export default SocialIcon;