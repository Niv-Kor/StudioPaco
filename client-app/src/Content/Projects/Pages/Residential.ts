import { IProjectCategory } from '../types';
import SH40Thumbnail from 'resources/Graphics/Projects/Residential/SH40/thumbnail.png';
import Y28Thumbnail from 'resources/Graphics/Projects/Residential/Y28/thumbnail.png';
import HZ28Thumbnail from 'resources/Graphics/Projects/Residential/HZ28/thumbnail.png';
import P10Thumbnail from 'resources/Graphics/Projects/Residential/P10/thumbnail.png';
import A26Thumbnail from 'resources/Graphics/Projects/Residential/A26/thumbnail.png';

const data: IProjectCategory = {
    key: 'residential',
    text: 'Domains of inhabitation. Shaping of living environments to host individual stories while complementing their surrounding context.',
    stripIndex: 6,
    projects: [
        {
            name: 'SH40',
            thumbnail: SH40Thumbnail,
            location: 'Tel Aviv',
            programma: '8 story residential building',
            entity: 'Messer architects',
            year: 2022
        },
        {
            name: 'Y28',
            thumbnail: Y28Thumbnail,
            location: 'Tel Aviv',
            programma: '6 story residential building',
            entity: 'Messer architects',
            year: 2022
        },
        {
            name: 'HZ28',
            thumbnail: HZ28Thumbnail,
            location: 'Tel Aviv',
            programma: '5 story residential building',
            entity: 'Messer architects',
            year: 2021
        },
        {
            name: 'P10',
            thumbnail: P10Thumbnail,
            location: 'Tel Aviv',
            programma: '9 story residential building',
            entity: 'Messer architects',
            year: 2023
        },
        {
            name: 'A26',
            thumbnail: A26Thumbnail,
            location: 'Tel Aviv',
            programma: '6 story residential building',
            entity: 'Messer architects',
            year: 2023
        }
    ]
};

export default data;