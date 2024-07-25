import { IProjectCategory } from './types';
import Commercial from './Pages/Commercial';
import Residential from './Pages/Residential';
import Hospitality from './Pages/Hospitality';
import InteriorDesign from './Pages/InteriorDesign';
import ProductDesign from './Pages/ProductDesign';
import Conceptual from './Pages/Conceptual';
import Feasibility from './Pages/Feasibility';
import Licensing from './Pages/Licensing';

export const Projects: Array<IProjectCategory> = [
    Commercial,
    Residential,
    Hospitality,
    InteriorDesign,
    ProductDesign,
    Conceptual,
    Feasibility,
    Licensing
];

export const DummyProjects = [...Projects].toSpliced(1, 0, {
    key: 'dummy',
    text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
    stripIndex: 1,
    projects: []
});