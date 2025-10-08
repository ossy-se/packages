export class WorkspacesClient {

  static of(config) {
    return new WorkspacesClient(config)
  }

  constructor(config) {
    this.workspaceId = config?.workspaceId
    this.http = config?.http
    
    this.services = {
      enable: x => this.enableService(x),
      disable: x => this.disableService(x)
    }

    this.users = () => this.getUsers()

  }

  getAll() {
    return this.http.get('/workspaces')
  }

  byId(workspaceId) {
    return this.http.get(`/workspaces/${workspaceId}`)
  }

  create(workspaceName) {
    return this.http.post('/workspaces', workspaceName)
  }

  importResourceTempaltes(workspaceId, templates) {
    return this.http.post(
      `/workspaces/${workspaceId}/resource-templates`,
      templates
    )
  }

  getResourceTemplates(workspaceId) {
    return this.http.get(
      `/workspaces/${workspaceId}/resource-templates`
    )
  }

  createApiToken(workspaceId, description) {
    return this.http.post(
      `/workspaces/${workspaceId}/tokens`,
      { workspaceId, description }
    )
  }

  getApiTokens(workspaceId) {
    return this.http.get(
      `/workspaces/${workspaceId}/tokens`
    )
  }

  inviteUser(workspaceId, email) {
    return this.http.post(
      `/workspaces/${workspaceId}/invitations`,
      email
    )
  }

  enableService(service) {
    return this.http.post(
      `/services/enable`,
      service
    )
  }

  disableService(service) {
    return this.http.post(
      `/services/disable`,
      service
    )
  }

  getUsers() {
    return this.http.get(
      `/workspaces/${this.workspaceId}/users`
    )
  }

}
