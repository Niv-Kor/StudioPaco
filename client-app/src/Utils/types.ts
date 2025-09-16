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
    open: boolean;
    openDelay: number;
    onClose: () => void;
}

export type I18n = {
    [K in SupportedLanguages]: string;
};

export type LanguageDirection = "ltr" | "rtl";

export interface ILanguageData {
    displayName: string;
    direction:LanguageDirection
}

export interface ITranslation {
    language: SupportedLanguages;
    changeLanguage: (language: SupportedLanguages) => void;
    translate: (i18nObj: I18n | undefined) => string;
    textDir: LanguageDirection;
    isRtl: boolean;
}