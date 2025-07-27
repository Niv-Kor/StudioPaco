export interface IProjectCategory {
    key: string;
    text: string;
    stripIndex: number;
    leftMargin?: number;
    topMargin?: number;
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