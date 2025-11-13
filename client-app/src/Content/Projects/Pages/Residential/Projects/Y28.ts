import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/Y28/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/Y28/Y28.1-360.380.jpg';
import Image2 from 'resources/Graphics/Projects/Residential/Y28/Y28.2-330.380.jpg';
import Image3 from 'resources/Graphics/Projects/Residential/Y28/Y28.3-330.380.jpg';
import Image4 from 'resources/Graphics/Projects/Residential/Y28/Y28.4-330.380.jpg';
import Image5 from 'resources/Graphics/Projects/Residential/Y28/Y28.5-330.160.png';
import Image6 from 'resources/Graphics/Projects/Residential/Y28/Y28.6-330.380.png';

const data: IProjectData = {
    name: 'Y28',
    location: {
        en: 'Tel Aviv',
        he: 'תל אביב',
    },
    programma: {
        en: '6 story residential building',
        he: 'בניין מגורים בן 6 קומות',
    },
    entity: {
        en: 'Yoav Messer architects',
        he: 'יואב מסר אדריכלים',
    },
    year: 2022,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6
    ]
};

export default data;