import { IDrawerButton } from "../DrawerButton/DrawerButton";

export enum DrawerType {
    Social,
    Contact,
    Language,
}

export interface IDrawerConfig extends IDrawerButton {
    id: string;
}