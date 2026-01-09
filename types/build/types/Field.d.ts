export interface Field {
    label: string;
    name: string;
    type: string;
    description: string;
    placeholder?: string;
    required: boolean;
    options?: string[];
}
