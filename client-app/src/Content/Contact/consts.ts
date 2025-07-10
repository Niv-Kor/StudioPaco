import { IField } from "./types";

export const FORM_ID = "mnnvejkn";
export const DEFAULT_CONTACT_MESSAGE = "Hi, I’d like to discuss a potential project";
export const FIELDS: IField[] = [
    {
        name: "name",
        label: "Name",
        autocomplete: "name",
        maxLength: 30,
        required: true,
    },
    {
        name: "company",
        label: "Company",
        autocomplete: "name",
        maxLength: 30,
    },
    {
        name: "email",
        label: "Email",
        autocomplete: "email",
        required: true,
    }
];