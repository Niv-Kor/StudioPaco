import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/HS4/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/HS4/HS4.1-380.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/A26/HS4.2-380.260.gif';
import Image3 from 'resources/Graphics/Projects/Residential/A26/HS4.3-260.380.png';
import Image4 from 'resources/Graphics/Projects/Residential/A26/HS4.4-380.380.png';
import Image5 from 'resources/Graphics/Projects/Residential/A26/HS4.5-380.380.png';
import Image6 from 'resources/Graphics/Projects/Residential/A26/HS4.6-380.380.png';

const data: IProjectData = {
    name: 'HS4',
    location: 'Tel Aviv',
    programma: '7 story residential building, commercial ground floor',
    entity: 'Studio Paco',
    year: 2024,
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