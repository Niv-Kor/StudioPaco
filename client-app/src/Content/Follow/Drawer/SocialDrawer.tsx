import { FC, useMemo } from 'react';
import { SocialDrawerState } from '../types';
import { SocialMethods } from '../constants';
import SocialIcon from './Social Icon/SocialIcon';
import useBackButton from "shared/hooks/useBackButton";
import { isRevertMode } from 'Utils/Theme';
import {
    Drawer,
    DrawerNotch,
    DrawerList
} from './SocialDrawer.style';

interface ISocialDrawer {
    state: SocialDrawerState;
    onClose: () => void;
}

const SocialDrawer: FC<ISocialDrawer> = ({
    state,
    onClose
}) => {
    const isAvailable = useMemo<boolean>(() => state === SocialDrawerState.Open, [state]);

    useBackButton("Follow", onClose, isAvailable);
    
    return (
        <Drawer
            available={isAvailable}
            revertMode={isRevertMode()}
            state={state}
        >
            <DrawerList>
                {SocialMethods.map(config => (
                    <DrawerNotch key={config.key}>
                        <SocialIcon
                            enabled={isAvailable}
                            config={config}
                        />
                    </DrawerNotch>
                ))}
            </DrawerList>
        </Drawer>
    );
}

export default SocialDrawer;