export enum MainDrawer {
    None,
    About,
    Projects
}

export interface IDrawer {
    open: boolean;
    openDelay: number;
    onClose: () => void;
}