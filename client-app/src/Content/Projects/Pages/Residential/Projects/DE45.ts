import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/DE45/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/DE45/DE45.1-330.480.png';
import Image2 from 'resources/Graphics/Projects/Residential/DE45/DE45.2-330.480.png';
import Image3 from 'resources/Graphics/Projects/Residential/DE45/DE45.3-330.480.png';
import Image4 from 'resources/Graphics/Projects/Residential/DE45/DE45.4-330.480.png';
import Image5 from 'resources/Graphics/Projects/Residential/DE45/DE45.5-380.260.png';
import Image6 from 'resources/Graphics/Projects/Residential/DE45/DE45.6-380.260.png';


const data: IProjectData = {
    name: 'DE45',
    location: 'Holon',
    programma: '10 story residential building',
    entity: 'Studio Paco',
    year: 2025,
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