import { FC, useRef, useState } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import { SocialDrawerState } from 'Content/Follow/types';
import SocialDrawer from 'Content/Follow/Drawer/SocialDrawer';
import useOutsideClick from 'shared/hooks/useOutsideClick';

const FollowButton: FC = () => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [drawerState, setDrawerState] = useState<SocialDrawerState>(SocialDrawerState.Closed);
    useOutsideClick(drawerRef, () => setDrawerState(SocialDrawerState.Closed));

    const onHover = (): void => {
        if (drawerState === SocialDrawerState.Closed)
            setDrawerState(SocialDrawerState.SemiOpen);
    }

    const onLeave = (): void => {
        if (drawerState === SocialDrawerState.SemiOpen)
            setDrawerState(SocialDrawerState.Closed);
    }

    const onClick = (): void => {
        setDrawerState(prevState => {
            switch (prevState) {
                case SocialDrawerState.SemiOpen:
                case SocialDrawerState.Closed: return SocialDrawerState.Open;
                case SocialDrawerState.Open: return SocialDrawerState.Closed;
            }
        });
    }

    return (
        <div ref={drawerRef}>
            <MenuButton
                text={"follow"}
                onClick={onClick}
                onHover={onHover}
                onLeave={onLeave}
            />
            <SocialDrawer
                state={drawerState}
                onClose={() => setDrawerState(SocialDrawerState.Closed)}
            />
        </div>
    );
}

export default FollowButton;