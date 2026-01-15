export const Jobs = {
  VisualContentDescriptors: '@ossy/jobs/visual-content-descriptors',
  ResizeCommonWeb: '@ossy/jobs/resize-common-web',
} as const;

export type JobType = typeof Jobs[keyof typeof Jobs];

export const JobStatus = {
  Queued: 'queued',
  InProgress: 'in progress',
  Success: 'success',
  Failed: 'failed',
} as const;

export type JobStatusType = typeof JobStatus[keyof typeof JobStatus];

export interface Job {
  resourceId: string;
  status: JobStatusType;
  result?: unknown;
  nextReevaluation?: number | null;
}
