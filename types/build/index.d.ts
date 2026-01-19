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

interface SDKConfig {
    apiUrl?: string;
    workspaceId?: string;
    authorization?: string;
}

interface Action<Payload extends (Record<string, string | boolean | number | unknown> & SDKConfig) | undefined = {}> {
    id: string;
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    payload?: Payload;
}

declare const Jobs: {
    readonly VisualContentDescriptors: "@ossy/jobs/visual-content-descriptors";
    readonly ResizeCommonWeb: "@ossy/jobs/resize-common-web";
};
type JobType = typeof Jobs[keyof typeof Jobs];
declare const JobStatus: {
    readonly Queued: "queued";
    readonly InProgress: "in progress";
    readonly Success: "success";
    readonly Failed: "failed";
};
type JobStatusType = typeof JobStatus[keyof typeof JobStatus];
interface Job {
    resourceId: string;
    status: JobStatusType;
    result?: unknown;
    nextReevaluation?: number | null;
}

export { JobStatus, Jobs };
export type { Action, Field, Job, JobStatusType, JobType, Resource, ResourceTemplate, SDKConfig, Workspace };
