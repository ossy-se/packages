export const Jobs = {
  VisualContentDescriptors: '@ossy/jobs/visual-content-descriptors',
  ResizeCommonWeb: '@ossy/jobs/resize-common-web',
}

export const JobStatus = {
  Queued: 'queued',
  InProgress: 'in progress',
  Success: 'success',
  Failed: 'failed',
}

export class JobsClient {
  static location = '/@ossy/jobs/'

    static of(config) {
      return new JobsClient(config)
    }
  
    constructor(config) {
      this.http = config?.http
      this.resources = config?.resources
    }

    get(_query = {}) {
      const query = typeof _query === 'string' ? { id: _query } : _query
      query.location = JobsClient.location
      return this.resources.search(query)
    }

    getUnprocessed() {
      return this.resources.search({
        $and: [
            {
              $or: [
                { "content.nextReevaluation": { $exists: false } },
                { "content.nextReevaluation": null },
                { "content.nextReevaluation": { $lt: Date.now() } }
              ]
            },
            { 'content.status': { $in: ['queued', 'failed'] } },
            { "location": "/@ossy/jobs/" },
            { "type": { $regex: "^@ossy/jobs" } }
          ]
    })
    }

    create({ type, resourceId }) {
      const jobTypeExists = Object.values(Jobs).includes(type)
      if (!jobTypeExists) throw new Error(`Job type ${type} does not exist`)
      if (!resourceId) throw new Error(`Resource ID is required`)
      return this.resources.create({
        type,
        location: JobsClient.location,
        name: `[${JobStatus.Queued}] ${resourceId}`,
        content: {
          resourceId,
          status: JobStatus.Queued,
          result: undefined
        }
      })
    }
  
    
  }
  