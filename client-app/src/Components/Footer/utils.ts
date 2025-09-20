import { SupportedLanguages } from "../../Utils/types";

export const getOtherLanguages = (language: SupportedLanguages): SupportedLanguages[] =>
    Object.values(SupportedLanguages).filter(lang => lang !== language);