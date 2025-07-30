import { IProjectData } from "Content/Projects/types";
import Thumbnail from 'resources/Graphics/Projects/Residential/W27/thumbnail.png';
import Image1 from 'resources/Graphics/Projects/Residential/W27/W27.1-280.380.png';
import Image2 from 'resources/Graphics/Projects/Residential/W27/W27.2-380.330.png';
import Image3 from 'resources/Graphics/Projects/Residential/W27/W27.3-280.380.gif';

const data: IProjectData = {
    name: 'W27',
    location: 'Haifa',
    programma: '11 story residential building and student dorms complex. Zoning plan and permits',
    entity: 'Studio Paco',
    year: 2025,
    thumbnail: Thumbnail,
    images: [
        Image1,
        Image2,
        Image3
    ]
};

export default data;