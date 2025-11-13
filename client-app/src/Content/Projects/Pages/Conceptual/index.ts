import { IProjectCategory } from 'Content/Projects/types';
import { StripWidth } from '../../constants';

const data: IProjectCategory = {
    id: 'conceptual',
    title: {
        en: 'conceptual',
        he: 'קונספטואלי',
    },
    text: {
        en: 'playgrounds for architectural imagination at all scales. Exporing envisioned spaces through lab-work, professional insights, and lenses of art.',
        he: 'מרחבי משחק לדמיון האדריכלי בכל קנה מידה. חקירת חללים מדומיינים דרך עבודת מעבדה, תובנות מקצועיות ועדשות של אמנות.',
    },
    stripIndex: 7,
    stripLeftMargin: StripWidth / 3,
    projects: []
};

export default data;