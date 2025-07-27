import { IProjectCategory } from './types';
import Residential from './Pages/Residential';
import Hospitality from './Pages/Hospitality';
import Commercial from './Pages/Commercial';
import InteriorDesign from './Pages/Interior Design';
import Conceptual from './Pages/Conceptual';
import ProductDesign from './Pages/Product Design';
import Feasibility from './Pages/Feasibility';
import Licensing from './Pages/Licensing';

export const Projects: Array<IProjectCategory> = [
    Residential,
    Hospitality,
    Commercial,
    InteriorDesign,
    Conceptual,
    ProductDesign,
    Feasibility,
    Licensing
];

export const DummyProjects = [...Projects].toSpliced(1, 0, {
    key: 'dummy',
    text: '',
    stripIndex: 1,
    projects: []
});