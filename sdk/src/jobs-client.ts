import { Jobs, JobStatus, JobType, Resource, Job } from '@ossy/types';

export { Jobs, JobStatus };

interface ResourcesClient {
  search: (payload: Record<string, unknown> ) => Promise<Resource<Job>[]>;
  create: (data: {
    type: string;
    location: string;
    name: string;
    content: {
      resourceId: string;
      status: string;
      result: undefined;
    };
  }) => Promise<Resource<Job>>;
}

interface JobsClientConfig {
  http?: unknown;
  resources: ResourcesClient;
}

export class JobsClient {
  static location = '/@ossy/jobs/';

  private http?: unknown;
  private resources: ResourcesClient;

  static of(config: JobsClientConfig): JobsClient {
    return new JobsClient(config);
  }

  constructor(config: JobsClientConfig) {
    this.http = config?.http;
    this.resources = config.resources;
  }

  get(_query: string | Record<string, unknown> = {}): Promise<Resource<Job>[]> {
    const query: Record<string, unknown> = typeof _query === 'string' ? { id: _query } : _query;
    query.location = JobsClient.location;
    return this.resources.search({ query });
  }

  getUnprocessed(): Promise<Resource<Job>[]> {
    return this.resources.search({
      $and: [
        {
          $or: [
            { 'content.nextReevaluation': { $exists: false } },
            { 'content.nextReevaluation': null },
            { 'content.nextReevaluation': { $lt: Date.now() } },
          ],
        },
        { 'content.status': { $in: ['queued', 'failed'] } },
        { location: '/@ossy/jobs/' },
        { type: { $regex: '^@ossy/jobs' } },
      ],
    });
  }

  create({ type, resourceId }: { type: JobType; resourceId: string }): Promise<Resource<Job>> {
    const jobTypeExists = Object.values(Jobs).includes(type);
    if (!jobTypeExists) throw new Error(`Job type ${type} does not exist`);
    if (!resourceId) throw new Error(`Resource ID is required`);
    return this.resources.create({
      type,
      location: JobsClient.location,
      name: `[${JobStatus.Queued}] ${resourceId}`,
      content: {
        resourceId,
        status: JobStatus.Queued,
        result: undefined,
      },
    });
  }
}
