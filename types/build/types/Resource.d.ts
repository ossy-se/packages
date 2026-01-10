export interface Resource<T = any> {
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
