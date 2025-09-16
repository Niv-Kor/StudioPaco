import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/ST1/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/ST1/ST1.1-380.260.png';
import Image2 from 'resources/Graphics/Projects/Residential/ST1/ST1.2-380.360.png';
import Image3 from 'resources/Graphics/Projects/Residential/ST1/ST1.3-380.260.png';
import Image4 from 'resources/Graphics/Projects/Residential/ST1/ST1.4-380.330.png';
import Image5 from 'resources/Graphics/Projects/Residential/ST1/ST1.5-380.330.png';

const data: IProjectData = {
    name: 'ST1',
    location: {
        en: 'Statos, Cyprus',
        he: 'סטטוס, קפריסין',
    },
    programma: {
        en: '2 story Private Home',
        he: 'בית פרטי בן 2 קומות',
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
        Image4,
        Image5
    ]
};

export default data;