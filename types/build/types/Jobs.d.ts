export declare const Jobs: {
    readonly VisualContentDescriptors: "@ossy/jobs/visual-content-descriptors";
    readonly ResizeCommonWeb: "@ossy/jobs/resize-common-web";
};
export type JobType = typeof Jobs[keyof typeof Jobs];
export declare const JobStatus: {
    readonly Queued: "queued";
    readonly InProgress: "in progress";
    readonly Success: "success";
    readonly Failed: "failed";
};
export type JobStatusType = typeof JobStatus[keyof typeof JobStatus];
export interface Job {
    resourceId: string;
    status: JobStatusType;
    result?: unknown;
    nextReevaluation?: number | null;
}
