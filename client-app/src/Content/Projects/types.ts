import Commercial from './Pages/Commercial';
import Residential from './Pages/Residential';
import Hospitality from './Pages/Hospitality';
import InteriorDesign from './Pages/Interior Design';
import ProductDesign from './Pages/Product Design';
import Conceptual from './Pages/Conceptual';
import Feasibility from './Pages/Feasibility';
import Licensing from './Pages/Licensing';

export interface IProjectCategory {
    key: string;
    text: string;
    stripIndex: number;
    leftMargin?: number;
    projects: Array<IProjectData>;
}

export interface IProjectData {
    name: string;
    location: string;
    programma: string;
    entity: string;
    year: number;
    thumbnail: string;
    images: Array<string>;
}



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
    text: '',
    stripIndex: 1,
    projects: []
});