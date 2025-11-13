import { IProjectCategory } from 'Content/Projects/types';
import { CategoryDelimiterSize } from '../../constants';
import { pdfjs } from 'react-pdf';
import PresentationViewer from "../../../../Components/Presentation Viewer/PresentationViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const data: IProjectCategory = {
    id: 'licensing',
    title: {
        en: 'licensing',
        he: 'רישוי',
    },
    text: {
        en: 'protocols for statutory navigation. Steering projects through bureaucratic procedures to elevate the priority of the architectural vision.',
        he: 'פרוטוקולים לניווט סטטוטורי. הובלת פרויקטים דרך תהליכים בירוקרטיים כדי להציב את חזון האדריכלות בעדיפות.',
    },
    bodyText: {
        en: 'This category focuses on the legal and regulatory aspects of architectural projects.',
        he: 'קטגוריה זו מתמקדת בהיבטים המשפטיים והרגולטוריים של פרויקטים אדריכליים.',
    },
    bodyElement: (
        <PresentationViewer />
    ),
    stripIndex: 5,
    keyMargin: `${CategoryDelimiterSize}px 0 0 0`,
    projects: [],
};

export default data;