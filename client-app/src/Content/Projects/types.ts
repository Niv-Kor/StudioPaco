import { I18n } from "Utils/types";

export interface IProjectCategory {
    id: string;
    title: I18n;
    text: I18n;
    stripIndex: number;
    icon?: string;
    stripLeftMargin?: number;
    keyMargin?: string;
    bodyText?: I18n;
    projects: Array<IProjectData>;
}

export interface IProjectData {
    name: string;
    location: I18n;
    programma: I18n;
    entity: I18n;
    year: number;
    thumbnail: string;
    images: Array<string>;
}