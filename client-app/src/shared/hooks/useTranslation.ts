import { ITranslation } from "Utils/types";
import { useContext } from "react";
import { TranslationContext } from "shared/context/TranslationContext";

const useTranslation = (): ITranslation => useContext(TranslationContext);

export default useTranslation;