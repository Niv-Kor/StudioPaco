import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Hospitality/DP2/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.1-380.380.png';
import Image2 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.2-380.380.png';
import Image3 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.3-380.160.png';
import Image4 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.4-380.360.png';
import Image5 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.5-380.380.png';

const data: IProjectData = {
    name: 'DP2',
    location: {
        en: 'Ramon crater, Negev',
        he: 'מצפה רמון, נגב',
    },
    programma: {
        en: 'Desert hotel. Architectural competition',
        he: 'מלון במדבר. תחרות אדריכלית',
    },
    entity: {
        en: 'Studio Paco',
        he: 'סטודיו פאקו',
    },
    year: 2024,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5
    ]
};

export default data;