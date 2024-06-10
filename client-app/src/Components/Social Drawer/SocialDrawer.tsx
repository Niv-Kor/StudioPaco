import { FC } from 'react';
import { Drawer, DrawerNotch } from './SocialDrawer.style';
import { SocialDrawerState } from './types';
import { SocialMethods } from './constants';
import SocialIcon from './Social Icon/SocialIcon';

interface ISocialDrawer {
    state: SocialDrawerState;
}

const SocialDrawer: FC<ISocialDrawer> = ({ state }) => {
    return (
        <Drawer state={state}>
            {SocialMethods.map(config => (
                <DrawerNotch>
                    <SocialIcon config={config} />
                </DrawerNotch>
            ))}
        </Drawer>
    );
}

export default SocialDrawer;