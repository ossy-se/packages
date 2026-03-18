export interface Field {
    label?: string;  // defaults to name when omitted
    name: string;
    type: string;
    description?: string;
    placeholder?: string;
    required?: boolean;
    options?: string[]; // for select and multiselect types
}