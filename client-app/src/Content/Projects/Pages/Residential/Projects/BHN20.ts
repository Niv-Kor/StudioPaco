import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/BHN20/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/BHN20/BHN20.1-380.380.jpg';
import Image2 from 'resources/Graphics/Projects/Residential/BHN20/BHN20.2-380.380.jpg';
import Image3 from 'resources/Graphics/Projects/Residential/BHN20/BHN20.3-330.380.png';
import Image4 from 'resources/Graphics/Projects/Residential/BHN20/BHN20.4-380.380.jpg';

const data: IProjectData = {
    name: 'BHN20',
    location: {
        en: 'Ramat Gan',
        he: 'רמת גן',
    },
    programma: {
        en: '8 story residential building, commercial ground floor',
        he: 'בניין מגורים בן 8 קומות, קומת קרקע מסחרית',
    },
    entity: {
        en: 'Studio Paco',
        he: 'סטודיו פאקו',
    },
    year: 2025,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3,
        Image4
    ]
};

export default data;