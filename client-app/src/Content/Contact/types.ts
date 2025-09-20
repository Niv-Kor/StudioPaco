import { I18n } from "Utils/types";

export interface IField {
    name: string;
    autocomplete?: "name" | "email";
    label?: I18n;
    maxLength?: number;
    required?: boolean;
    props?: any;
}

export enum ContactField {
    Name,
    Company,
    Email,
    Message,
    Submit,
}