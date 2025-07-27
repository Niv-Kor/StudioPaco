import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Hospitality/T1H/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Hospitality/T1H/T1H.1-380.380.png';
import Image2 from 'resources/Graphics/Projects/Hospitality/T1H/T1H.2-380.380.png';
import Image3 from 'resources/Graphics/Projects/Hospitality/T1H/T1H.3-380.380.png';
import Image4 from 'resources/Graphics/Projects/Hospitality/T1H/T1H.4-380.380.png';

const data: IProjectData = {
    name: 'T1H',
    location: 'Eilat',
    programma: 'Hidden Hotel over the Red Sea reefs',
    entity: 'Studio Paco',
    year: 2024,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3,
        Image4
    ]
};

export default data;