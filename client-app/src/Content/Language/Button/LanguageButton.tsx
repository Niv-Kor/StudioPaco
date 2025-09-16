import { FC, useRef, useState } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import { SocialDrawerState } from 'Content/Follow/types';
import useOutsideClick from 'shared/hooks/useOutsideClick';
import LanguageDrawer from "../Drawer/LanguageDrawer";
import useTranslation from "../../../shared/hooks/useTranslation";
import { LanguageData } from "../../../Utils/constants";

const LanguageButton: FC = () => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [drawerState, setDrawerState] = useState<SocialDrawerState>(SocialDrawerState.Closed);
    const { language } = useTranslation();
    
    useOutsideClick([drawerRef], () => setDrawerState(SocialDrawerState.Closed));

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
                text={LanguageData[language].displayName}
                onClick={onClick}
                onHover={onHover}
                onLeave={onLeave}
            />
            <LanguageDrawer
                state={drawerState}
                onClose={() => setDrawerState(SocialDrawerState.Closed)}
            />
        </div>
    );
}

export default LanguageButton;