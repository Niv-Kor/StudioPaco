import { IProjectCategory } from 'Content/Projects/types';
import { StripWidth } from '../../constants';

const data: IProjectCategory = {
    id: 'interior design',
    title: {
        en: 'interior design',
        he: 'עיצוב פנים',
    },
    text: {
        en: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        he: 'מחקרי מקרה המחברים בין חזון קונספטואלי לישימות בפרויקטים פוטנציאליים. סיכום תהליכים אנליטיים, בחינת היבטים משפטיים, רגולטוריים, פיננסיים והקשריים לבחינה מעמיקה של יזמויות חדשות.',
    },
    stripIndex: 2,
    stripLeftMargin: -StripWidth / 2,
    projects: []
};

export default data;