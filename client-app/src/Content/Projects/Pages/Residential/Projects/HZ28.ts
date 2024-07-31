import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/HZ28/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/HZ28/HZ28.1-360.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/HZ28/HZ28.2-330.380.png';

const data: IProjectData = {
    name: 'HZ28',
    location: 'Tel Aviv',
    programma: '5 story residential building',
    entity: 'Messer architects',
    year: 2021,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2
    ]
};

export default data;