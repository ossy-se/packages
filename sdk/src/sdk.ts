import { 
  Action, 
  ApiTokenCreate, 
  ApiTokenGetAll, 
  ApiTokenInvalidate, 
  WorkspacesList,  
  WorkspacesCreate, 
  WorkspacesImportResourceTemplates, 
  WorkspacesGetResourceTemplates, 
  WorkspacesCreateApiToken, 
  WorkspacesGetApiTokens, 
  WorkspacesInviteUser, 
  WorkspacesEnableService, 
  WorkspacesDisableService, 
  WorkspacesGetUsers, 
  ResourcesCreateDirectory, 
  ResourcesCreate, 
  ResourcesUpload, 
  ResourcesUploadNamedVersion, 
  ResourcesGet,
  ResourcesList, 
  ResourcesSearch, 
  ResourcesRemove, 
  ResourcesUpdateContent, 
  ResourcesMove, 
  ResourcesRename, 
  AuthSignUp, 
  AuthSignIn, 
  AuthVerifySignIn, 
  AuthVerifyInvitation, 
  AuthGetAuthenticatedUser, 
  AuthGetAuthenticatedUserHistory, 
  AuthGetUser, 
  AuthSignOff, 
  WorkspacesGet,
  WorkspacesGetCurrent,
  UserCurrentGet,
  UserCurrentGetHistory,
  UserCurrentUpdate
} from './Actions';
import { SDKConfig } from './config'

export class SDK {

  workspaceId?: string;
  authorization?: string;
  baseUrl = 'https://api.ossy.se/api/v0'

  static of(config: SDKConfig) {
    return new SDK(config)
  }

  constructor(config: SDKConfig) {
    this.updateConfig(config)
  }

  updateConfig(intendedConfig: SDKConfig) {
    this.baseUrl = intendedConfig.apiUrl || this.baseUrl
    this.workspaceId = intendedConfig.workspaceId || this.workspaceId
    this.authorization = intendedConfig.authorization || this.authorization    
  }

  get apiTokens() {
    return {
      list: this.makeRequest(ApiTokenGetAll).bind(this),
      create: this.makeRequest(ApiTokenCreate).bind(this),
      invalidate: this.makeRequest(ApiTokenInvalidate).bind(this)
    }
  }

  get workspaces() {
    return {
      current: this.makeRequest(WorkspacesGetCurrent).bind(this),
      list: this.makeRequest(WorkspacesList).bind(this),
      get: this.makeRequest(WorkspacesGet).bind(this),
      create: this.makeRequest(WorkspacesCreate).bind(this),
      importResourceTemplates: this.makeRequest(WorkspacesImportResourceTemplates).bind(this),
      getResourceTemplates: this.makeRequest(WorkspacesGetResourceTemplates).bind(this),
      createApiToken: this.makeRequest(WorkspacesCreateApiToken).bind(this),
      getApiTokens: this.makeRequest(WorkspacesGetApiTokens).bind(this),
      inviteUser: this.makeRequest(WorkspacesInviteUser).bind(this),
      enableService: this.makeRequest(WorkspacesEnableService).bind(this),
      disableService: this.makeRequest(WorkspacesDisableService).bind(this),
    };
  }

  get users () {
    return {
      list: this.makeRequest(WorkspacesGetUsers).bind(this),
    }
  }

  get currentUser () {
    return {
      get: this.makeRequest(UserCurrentGet).bind(this),
      update: this.makeRequest(UserCurrentUpdate).bind(this),
      history: this.makeRequest(UserCurrentGetHistory).bind(this),
    }
  }

  get resources() {
    return {
      createDirectory: this.makeRequest(ResourcesCreateDirectory).bind(this),
      create: this.makeRequest(ResourcesCreate).bind(this),
      upload: ({ location = '/', file }: { location: string; file: File} ) => {
        const payload = {
          type: file.type,
          location: location,
          name: file.name,
          size: file.size
      }
        return this.makeRequest(ResourcesUpload)(payload)
        .then(resource => {
          return fetch(resource.content.uploadUrl, { method: 'PUT', body: file })
            .then(() => resource)
        })
      },
      uploadNamedVersion: ({ id, name, file }: { id: string, name: string, file: File }) => {
        const payload = {
          id: id,
          name: name,
          size: file.size
        }
        this.makeRequest(ResourcesUploadNamedVersion)(payload)
          .then(resource => {
            return fetch(resource.content.uploadUrl, { method: 'PUT', body: file })
              .then(() => resource)
          })
      },
      get: this.makeRequest(ResourcesGet).bind(this),
      list: (query: ({ location?: string; })) => {
        const search = new URLSearchParams({ ...query }).toString()
        return this.makeRequest(ResourcesList)({ search })
      },
      search: this.makeRequest(ResourcesSearch).bind(this),
      remove: this.makeRequest(ResourcesRemove).bind(this),
      updateContent: this.makeRequest(ResourcesUpdateContent).bind(this),
      move: this.makeRequest(ResourcesMove).bind(this),
      rename: this.makeRequest(ResourcesRename).bind(this),
    };
  }

  get auth() {
    return {
      signUp: this.makeRequest(AuthSignUp).bind(this),
      signIn: this.makeRequest(AuthSignIn).bind(this),
      verifySignIn: this.makeRequest(AuthVerifySignIn).bind(this),
      verifyInvitation: this.makeRequest(AuthVerifyInvitation).bind(this),
      getAuthenticatedUser: this.makeRequest(AuthGetAuthenticatedUser).bind(this),
      getAuthenticatedUserHistory: this.makeRequest(AuthGetAuthenticatedUserHistory).bind(this),
      getUser: this.makeRequest(AuthGetUser).bind(this),
      signOff: this.makeRequest(AuthSignOff).bind(this),
    };
  }

  makeRequest = <T extends Action>(action: T) => {
    return (_payload?: Required<T['payload']>) => {

      let payload: Required<T['payload']> = {} as Required<T['payload']>;

      if (!!_payload || action.payload) {
        payload = {
          ...(action.payload || {} as Required<T['payload']>),
          ...(_payload || {} as Required<T['payload']>)
        }
      }

      let baseUrl: string = 'apiUrl' in payload ? payload?.apiUrl as string : this.baseUrl
      let workspaceId = 'workspaceId' in payload ? payload.workspaceId : this.workspaceId;
      let authorization = 'authorization' in payload ? payload.authorization : this.authorization;
      let body: string | undefined = undefined;
      let endpoint = action.endpoint;

      if (payload) {
        const payloadKeys = Object.keys(payload) as (keyof typeof payload)[]
        console.log('[@ossy/sdk] payloadKeys', payloadKeys)
        console.log('[@ossy/sdk] action.endpoint', action.endpoint)
        endpoint = action.endpoint
  
        endpoint = payloadKeys.reduce(
          (endpoint, paramName) => endpoint.replace(`:${paramName as string}`, `${payload[paramName]}`),
          action.endpoint
        )

        console.log('[@ossy/sdk] endpoint after', endpoint)
      }

      const url = `${baseUrl}${endpoint}`

      const request: RequestInit = {
        method: action.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }

      if (workspaceId) {
        request.headers = {
          ...request.headers,
          //@ts-ignore
          'workspaceId': workspaceId
        };
      }

      if (authorization) {
        request.headers = {
          ...request.headers,
          //@ts-ignore
          'Authorization': authorization
        };
      }

      if (request.method !== 'GET' && payload) {
        request.body = JSON.stringify(payload);
      }

  
      return fetch(url, request).then(response => {
        const contentType = response.headers.get('Content-Type') || ''
        const status = response.status
        const okResponseCodes = [200, 204]
        if (status === 400) return response.json().then(content => Promise.reject(content.error))
        if (!okResponseCodes.includes(status)) return Promise.reject(response)
        if (contentType.includes('application/json')) return response.json()
        return response
      })
    }
  }

}

