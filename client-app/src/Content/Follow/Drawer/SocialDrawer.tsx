import { FC } from 'react';
import { DrawerState, IDrawer } from 'Utils/types';
import { SocialMethods } from '../constants';
import SocialIcon from './Social Icon/SocialIcon';
import useBackButton from "shared/hooks/useBackButton";
import { isRevertMode } from 'Utils/Theme';
import {
    Drawer,
    DrawerNotch,
    DrawerList
} from './SocialDrawer.style';

const SocialDrawer: FC<IDrawer> = ({
    state,
    onClose
}) => {
    const isAvailable = state === DrawerState.Open;

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