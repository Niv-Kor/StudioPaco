import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Hospitality/DP2/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.1-380.380.png';
import Image2 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.2-380.380.png';
import Image3 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.3-380.160.png';
import Image4 from 'resources/Graphics/Projects/Hospitality/DP2/DP2.4-380.360.png';

const data: IProjectData = {
    name: 'ZMO',
    location: {
        en: 'Western Galilee',
        he: 'הגליל המערבי',
    },
    programma: {
        en: 'Zimmer complex with 5 units and shared swimming pool',
        he: 'מתחם צימרים עם 5 יחידות ובריכת שחייה משותפת',
    },
    entity: {
        en: 'Studio Paco',
        he: 'סטודיו פאקו',
    },
    year: 2023,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3,
        Image4
    ]
};

export default data;