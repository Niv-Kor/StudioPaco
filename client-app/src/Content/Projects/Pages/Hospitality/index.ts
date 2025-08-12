import { IProjectCategory } from 'Content/Projects/types';
import { StripWidth } from '../../constants';
import DP2 from './Projects/DP2';
import T1H from './Projects/T1H';
import ZMO from './Projects/ZMO';

const data: IProjectCategory = {
    key: 'hospitality',
    text: 'environments of tailored experiences. Crafting a distinct sense of place and warmth, between functions of temporary needs and local aesthetics.',
    stripIndex: 4,
    stripLeftMargin: -StripWidth / 2,
    projects: [
        ZMO,
        T1H,
        DP2
    ]
};

export default data;