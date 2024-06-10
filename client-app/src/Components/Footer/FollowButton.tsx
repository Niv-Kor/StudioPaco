import MenuButton from '../Menu Button/MenuButton';
import { FC, useState } from 'react';
import { SocialDrawerState } from '../Social Drawer/types';
import SocialDrawer from '../Social Drawer/SocialDrawer';

const FollowButton: FC = () => {
    const [socialDrawerState, setSocialDrawerState] = useState<SocialDrawerState>(SocialDrawerState.Closed);

    const onFollowHover = (): void => {
        if (socialDrawerState === SocialDrawerState.Closed)
            setSocialDrawerState(SocialDrawerState.SemiOpen);
    }

    const onFollowLeave = (): void => {
        if (socialDrawerState === SocialDrawerState.SemiOpen)
            setSocialDrawerState(SocialDrawerState.Closed);
    }

    const onFollowClick = (): void => {
        setSocialDrawerState(prevState => {
            switch (prevState) {
                case SocialDrawerState.SemiOpen:
                case SocialDrawerState.Closed: return SocialDrawerState.Open;
                case SocialDrawerState.Open: return SocialDrawerState.Closed;
            }
        });
    }

    return (
        <>
            <MenuButton
                text={"follow"}
                onClick={onFollowClick}
                onHover={onFollowHover}
                onLeave={onFollowLeave}
            />
            <SocialDrawer state={socialDrawerState} />
        </>
    );
}

export default FollowButton;