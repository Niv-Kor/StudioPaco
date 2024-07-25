export interface IProjectCategory {
    key: string;
    text: string;
    stripIndex: number;
    leftMargin?: number;
    projects: Array<IProjectData>;
}

export interface IProjectData {
    name: string;
    thumbnail: string;
    location: string;
    programma: string;
    entity: string;
    year: number;
}