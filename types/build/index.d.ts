interface Field {
    label: string;
    name: string;
    type: string;
    description: string;
    placeholder?: string;
    required: boolean;
    options?: string[];
}

interface Resource<T = any> {
    id: string;
    name: string;
    location: string;
    belongsTo: string;
    type: string;
    createdBy: string;
    created: string;
    lastUpdated: string;
    content: T;
}

interface ResourceTemplate {
    id: string;
    name: string;
    description: string;
    categoryName: string;
    icon: string;
    fields: Field[];
}

interface Workspace {
    id: string;
    name: string;
    createdBy: string;
    created: string;
    users: string[];
    invitations: any[];
    resourceTemplates: ResourceTemplate[];
    services: Record<string, boolean>;
}

export type { Field, Resource, ResourceTemplate, Workspace };
