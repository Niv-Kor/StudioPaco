import { IProjectCategory } from 'Content/Projects/types';
import BHN20 from './Projects/BHN20';
import SH40 from './Projects/SH40';
import HZ28 from './Projects/HZ28';
import DE45 from './Projects/DE45';
import B18 from './Projects/B18';
import D206 from './Projects/D206';
import HS4 from './Projects/HS4';
import Y28 from './Projects/Y28';
import P10 from './Projects/P10';
import W27 from './Projects/W27';
import A26 from './Projects/A26';
import ST1 from './Projects/ST1';

const data: IProjectCategory = {
    key: 'residential',
    text: 'domains of inhabitation. Shaping of living environments to host individual stories while complementing their surrounding context.',
    stripIndex: 6,
    stripLeftMargin: 2,
    projects: [
        BHN20,
        SH40,
        HZ28,
        DE45,
        B18,
        D206,
        HS4,
        Y28,
        P10,
        W27,
        A26,
        ST1
    ]
};

export default data;