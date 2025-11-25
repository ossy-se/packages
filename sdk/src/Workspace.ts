import { ResourceTemplate } from "./ResourceTemplate";

export interface Workspace {
    id: string;
    name: string;
    createdBy: string;
    created: string;
    users: string[];
    invitations: any[];
    resourceTemplates: ResourceTemplate[];
    services: Record<string, boolean>;
}