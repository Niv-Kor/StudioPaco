export interface IField {
    name: string;
    autocomplete?: "name" | "email";
    label?: string;
    maxLength?: number;
    required?: boolean;
    props?: any;
}