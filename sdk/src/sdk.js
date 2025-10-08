import { AuthClient } from './auth-client.js'
import { JobsClient } from './jobs-client.js'
import { ApiTokensClient } from './api-tokens-client.js'
import { ResourcesClient } from './resources-client.js'
import { UserClient } from './user-client.js'
import { WorkspacesClient } from './workspaces-client.js'
import { Http } from './http.js'

export class SDK {

  static of(config) {
    return new SDK(config)
  }

  constructor(config) {
    this.updateConfig(config)
  }

  updateConfig(intendedConfig) {
    const oldConfig = this.config || {}

    this.config = {
      ...oldConfig,
      ...intendedConfig
    }

    const http = Http.of({
      baseUrl: this.config?.apiUrl || 'https://api.ossy.se/api/v0',
      headers: {
        workspaceId: this.config?.workspaceId,
        Authorization: this.config?.apiKey
      }
    })

    this.workspaceId = this.config.workspaceId
    this.user = UserClient.of({ ...this.config, http })
    this.auth = AuthClient.of({ ...this.config, http })
    this.workspaces = WorkspacesClient.of({ ...this.config, http })
    this.apiTokens = ApiTokensClient.of({ ...this.config, http })
    this.resources = ResourcesClient.of({ ...this.config, http })
    this.jobs = JobsClient.of({ ...this.config, http, resources: this.resources })
    
  }

}


