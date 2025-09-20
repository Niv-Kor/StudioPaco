import { DrawerState } from "Utils/types";

export interface IDrawerContainer {
    position?: "relative" | "absolute" | "fixed";
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    translateX?: ITransformByState;
    translateY?: ITransformByState;
}

export type ITransformByState = {
    [state in DrawerState]: string;
};