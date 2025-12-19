import { SupportedLanguages, ILanguageData } from "./types";

export const DrawerEnterTime = .5;
export const RTLTextAlignClassName = "with-rtl-text";
export const LanguageData: Record<SupportedLanguages, ILanguageData> = {
    [SupportedLanguages.ENG]: {
        displayName: "English",
        idPageDisplayName: "En.",
        direction: "ltr",
    },
    [SupportedLanguages.HEB]: {
        displayName: "עברית",
        idPageDisplayName: ".עב",
        direction: "rtl",
    },
}