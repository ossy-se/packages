import { Field } from "./Field";

export interface ResourceTemplate {
    id: string;
    name: string;
    description: string;
    categoryName: string;
    icon: string;
    fields: Field[];
}


