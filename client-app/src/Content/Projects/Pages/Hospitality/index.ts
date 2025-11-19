import { IProjectCategory } from 'Content/Projects/types';
import { StripWidth } from '../../constants';
import DP2 from './Projects/DP2';
import T1H from './Projects/T1H';
import ZMO from './Projects/ZMO';

const data: IProjectCategory = {
    id: 'hospitality',
    title: {
        en: 'hospitality',
        he: 'מלונאות',
    },
    text: {
        en: 'environments of tailored experiences. Crafting a distinct sense of place and warmth, between functions of temporary needs and local aesthetics.',
        he: 'סביבות של חוויה מותאמת אישית. יצירת תחושת מקום וחום ייחודית, בין צרכים זמניים לאסתטיקה מקומית.',
    },
    stripIndex: 4,
    stripLeftMargin: -StripWidth / 2,
    projects: [
        ZMO,
        T1H,
        DP2
    ]
};

export default data;