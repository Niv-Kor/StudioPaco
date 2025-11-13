import { IProjectCategory } from './types';
import Residential from './Pages/Residential';
import Hospitality from './Pages/Hospitality';
import Commercial from './Pages/Commercial';
import InteriorDesign from './Pages/Interior Design';
import Conceptual from './Pages/Conceptual';
import ProductDesign from './Pages/Product Design';
import Licensing from './Pages/Licensing';

export const Projects: Array<IProjectCategory> = [
    Residential,
    Hospitality,
    Commercial,
    InteriorDesign,
    Conceptual,
    ProductDesign,
    Licensing
];

export const DummyProjects: Array<IProjectCategory> = [
    ...Projects.slice(0, 1),
    {
        id: 'dummy',
        title: {
            en: '',
            he: ''
        },
        text: {
            en: '',
            he: ''
        },
        stripIndex: 1,
        projects: []
    },
    ...Projects.slice(1)
];