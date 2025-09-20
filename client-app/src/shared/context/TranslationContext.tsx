import React, { createContext, ReactNode, useState } from "react";
import { I18n, ITranslation, SupportedLanguages } from "Utils/types";
import { noop } from "lodash";
import useLocalStorage from "../hooks/useLocalStorage";
import { LanguageData } from "../../Utils/constants";

const LANGUAGE_LOCAL_STORAGE_KEY = "language";

export const TranslationContext = createContext<ITranslation>({
    language: SupportedLanguages.ENG,
    changeLanguage: noop,
    translate: () => "",
    isRtl: false,
    textDir: "ltr",
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
    const [value, cacheValue] = useLocalStorage(LANGUAGE_LOCAL_STORAGE_KEY, SupportedLanguages.ENG);
    const [language, setLanguage] = useState<SupportedLanguages>(value as SupportedLanguages);
    const direction = LanguageData?.[language]?.direction ?? "ltr";
    
    const changeLanguage = (lang: SupportedLanguages): void => {
        setLanguage(lang);
        cacheValue(lang);
    }
    
    const translate = (obj: I18n | string | undefined): string => {
        if (typeof obj === "object") return obj?.[language] ?? "[UNSUPPORTED_LANGUAGE]";
        else return obj?.toString() ?? "";
    }
    
    return (
        <TranslationContext.Provider
            value={{
                language,
                changeLanguage,
                translate,
                isRtl: direction === "rtl",
                textDir: direction,
            }}
        >
            {children}
        </TranslationContext.Provider>
    );
};