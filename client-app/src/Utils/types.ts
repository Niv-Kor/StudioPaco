export enum SupportedLanguages {
    ENG = "en",
    HEB = "he",
}

export enum MainDrawer {
    None,
    About,
    Projects
}

export interface IDrawer {
    state: DrawerState;
    onClose: () => void;
}

export type I18n = {
    [K in SupportedLanguages]: string;
};

export type LanguageDirection = "ltr" | "rtl";

export interface ILanguageData {
    displayName: string;
    idPageDisplayName: string;
    direction:LanguageDirection
}

export interface ITranslation {
    language: SupportedLanguages;
    changeLanguage: (language: SupportedLanguages) => void;
    translate: (i18nObj: I18n | string | undefined) => string;
    textDir: LanguageDirection;
    isRtl: boolean;
}

export enum DrawerState {
    Closed,
    SemiOpen,
    Open
}