import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/Y28/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/Y28/Y28.1-360.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/Y28/Y28.2-330.160.png';
import Image3 from 'resources/Graphics/Projects/Residential/Y28/Y28.3-330.380.png';

const data: IProjectData = {
    name: 'Y28',
    location: 'Tel Aviv',
    programma: '6 story residential building',
    entity: 'Messer architects',
    year: 2022,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3
    ]
};

export default data;