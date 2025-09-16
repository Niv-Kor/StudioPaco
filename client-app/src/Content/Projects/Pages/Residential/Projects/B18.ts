import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/B18/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/B18/B18.1-360.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/B18/B18.2-330.215.jpg';

const data: IProjectData = {
    name: 'B18',
    location: {
        en: 'Tel Aviv',
        he: 'תל אביב',
    },
    programma: {
        en: '7 story residential building',
        he: 'בניין מגורים בן 7 קומות',
    },
    entity: {
        en: 'Yoav Messer architects',
        he: 'יואב מסר אדריכלים',
    },
    year: 2024,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2
    ]
};

export default data;