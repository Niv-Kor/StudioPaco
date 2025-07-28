export interface IScrollbar {
    isActive: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
}

export interface IScrollbarHookResult {
    scrollPercent: number;
    scrollTop: number;
    offsetHeight: number;
    scrollHeight: number;
    scrollbarProps: IScrollbar;
}