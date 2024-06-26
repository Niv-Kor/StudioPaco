export enum SocialDrawerState {
    Closed,
    SemiOpen,
    Open
}

export interface ISocialIconConfig {
    key: string;
    iconSrc: string;
    value: string;
    clipboardString?: string;
    href?: string;
}