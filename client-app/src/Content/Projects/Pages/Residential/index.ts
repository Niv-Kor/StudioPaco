import { IProjectCategory } from 'Content/Projects/types';
import SH40 from './Projects/SH40';
import HZ28 from './Projects/HZ28';
import Y28 from './Projects/Y28';
import P10 from './Projects/P10';
import A26 from './Projects/A26';

const data: IProjectCategory = {
    key: 'residential',
    text: 'Domains of inhabitation. Shaping of living environments to host individual stories while complementing their surrounding context.',
    stripIndex: 6,
    projects: [
        SH40,
        HZ28,
        Y28,
        P10,
        A26
    ]
};

export default data;