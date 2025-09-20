import { ContactField, IField } from "./types";
import { I18n } from "Utils/types";

export const FORM_ID = "mnnvejkn";
export const FIELD_TRANSLATIONS: Record<ContactField, I18n> = {
    [ContactField.Name]: {
        en: "Name",
        he: "שם",
    },
    [ContactField.Company]: {
        en: "Company",
        he: "חברה",
    },
    [ContactField.Email]: {
        en: "Email",
        he: "אימייל",
    },
    [ContactField.Message]: {
        en: "Hi, I'd like to discuss a potential project",
        he: "שלום, אני מעוניין לשוחח על פרוייקט",
    },
    [ContactField.Submit]: {
        en: "reach out",
        he: "פנה אלינו",
    }
}

export const FIELDS: IField[] = [
    {
        name: "name",
        label: FIELD_TRANSLATIONS[ContactField.Name],
        autocomplete: "name",
        maxLength: 30,
        required: true,
    },
    {
        name: "company",
        label: FIELD_TRANSLATIONS[ContactField.Company],
        autocomplete: "name",
        maxLength: 30,
    },
    {
        name: "email",
        label: FIELD_TRANSLATIONS[ContactField.Email],
        autocomplete: "email",
        required: true,
    }
];