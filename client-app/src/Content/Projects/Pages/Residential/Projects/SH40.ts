import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/SH40/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/SH40/SH40.1-360.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/SH40/SH40.2-330.140.png';
import Image3 from 'resources/Graphics/Projects/Residential/SH40/SH40.3-175.200.png';
import Image4 from 'resources/Graphics/Projects/Residential/SH40/SH40.4-330.380.png';

const data: IProjectData = {
    name: 'SH40',
    location: 'Tel Aviv',
    programma: '8 story residential building',
    entity: 'Messer architects',
    year: 2022,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3,
        Image4
    ]
};

export default data;