export interface IProjectCategory {
    key: string;
    text: string;
    stripeIndex: number;
    leftMargin?: number;
    projects: Array<IProjectData>;
}

export interface IProjectData {
    name: string;
    thumbnail: string;
}