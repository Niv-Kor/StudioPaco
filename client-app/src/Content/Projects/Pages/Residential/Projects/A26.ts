import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/A26/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/A26/A26.1-360.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/A26/A26.2-330.160.png';
import Image3 from 'resources/Graphics/Projects/Residential/A26/A26.3-330.160.png';
import Image4 from 'resources/Graphics/Projects/Residential/A26/A26.4-330.160.png';
import Image5 from 'resources/Graphics/Projects/Residential/A26/A26.5-330.160.png';

const data: IProjectData = {
    name: 'A26',
    location: {
        en: 'Tel Aviv',
        he: 'תל אביב',
    },
    programma: {
        en: '6 story residential building, commercial ground floor',
        he: 'בניין מגורים בן 6 קומות, קומת קרקע מסחרית',
    },
    entity: {
        en: 'Yoav Messer architects',
        he: 'יואב מסר אדריכלים',
    },
    year: 2023,
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