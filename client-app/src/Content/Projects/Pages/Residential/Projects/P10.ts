import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/P10/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/P10/P10.1-360.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/P10/P10.2-330.160.png';
import Image3 from 'resources/Graphics/Projects/Residential/P10/P10.3-330.160.png';
import Image4 from 'resources/Graphics/Projects/Residential/P10/P10.4-330.160.png';
import Image5 from 'resources/Graphics/Projects/Residential/P10/P10.5-330.160.png';

const data: IProjectData = {
    name: 'P10',
    location: 'Tel Aviv',
    programma: '9 story residential building',
    entity: 'Messer architects',
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