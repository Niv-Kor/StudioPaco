import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/D206/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/D206/D206.1-380.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/D206/D206.2-380.380.png';
import Image3 from 'resources/Graphics/Projects/Residential/D206/D206.3-380.380.png';

const data: IProjectData = {
    name: 'D206',
    location: {
        en: 'Tel Aviv',
        he: 'תל אביב',
    },
    programma: {
        en: '6 story residential building',
        he: 'בניין מגורים בן 6 קומות',
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
        Image3
    ]
};

export default data;