import { FC, useMemo } from 'react';
import { SocialDrawerState } from '../types';
import { SocialMethods } from '../constants';
import SocialIcon from './Social Icon/SocialIcon';
import { isRevertMode } from 'Utils/Theme';
import {
    Drawer,
    DrawerNotch,
    DrawerList
} from './SocialDrawer.style';

interface ISocialDrawer {
    state: SocialDrawerState;
}

const SocialDrawer: FC<ISocialDrawer> = ({ state }) => {
    const isAvailable = useMemo<boolean>(() => state === SocialDrawerState.Open, [state]);

    return (
        <Drawer
            available={isAvailable}
            revertMode={isRevertMode()}
            state={state}
        >
            <DrawerList>
                {SocialMethods.map(config => (
                    <DrawerNotch>
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