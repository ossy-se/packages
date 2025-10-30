import { SDKConfig } from "./config";

export interface Action<Payload extends (Record<string, string | boolean | number> & SDKConfig) | undefined = {}> {
    id: string;
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    payload?: Payload
}
  
export const ApiTokenGetAll: Action = {
    id: 'api-tokens.get-all',
    endpoint: '/users/me/tokens',
    method: 'GET'
}
  
export const ApiTokenCreate: Action<{
    name: string,
    description: string,
    expiresAt: string;
}> = {
    id: 'api-tokens.create',
    endpoint: '/users/me/tokens',
    method: 'POST'
}
  
export const ApiTokenInvalidate: Action<{ id: string }> = {
    id: 'api-tokens.invalidate',
    endpoint: '/users/me/tokens/:id',
    method: 'DELETE'
}

// WorkspacesClient actions
export const WorkspacesList: Action = {
    id: 'workspaces.get-all',
    endpoint: '/workspaces',
    method: 'GET'
}

export const WorkspacesGet: Action<{ id: string }> = {
    id: 'workspaces.by-id',
    endpoint: '/workspaces/:id',
    method: 'GET'
}

export const WorkspacesCreate: Action<{ name: string }> = {
    id: 'workspaces.create',
    endpoint: '/workspaces',
    method: 'POST'
}

export const WorkspacesImportResourceTemplates: Action<{ templates: any }> = {
    id: 'workspaces.import-resource-templates',
    endpoint: '/resource-templates',
    method: 'POST'
}

export const WorkspacesGetResourceTemplates: Action = {
    id: 'workspaces.get-resource-templates',
    endpoint: '/resource-templates',
    method: 'GET'
}

export const WorkspacesCreateApiToken: Action<{ description: string }> = {
    id: 'workspaces.create-api-token',
    endpoint: '/tokens',
    method: 'POST'
}

export const WorkspacesGetApiTokens: Action = {
    id: 'workspaces.get-api-tokens',
    endpoint: '/tokens',
    method: 'GET'
}

export const WorkspacesInviteUser: Action<{ email: string }> = {
    id: 'workspaces.invite-user',
    endpoint: '/invitations',
    method: 'POST'
}

export const WorkspacesEnableService: Action<{ service: any }> = {
    id: 'workspaces.enable-service',
    endpoint: '/services/enable',
    method: 'POST'
}

export const WorkspacesDisableService: Action<{ service: any }> = {
    id: 'workspaces.disable-service',
    endpoint: '/services/disable',
    method: 'POST'
}

export const WorkspacesGetUsers: Action = {
    id: 'workspaces.get-users',
    endpoint: '/users',
    method: 'GET'
}

// UserClient actions
export const UserGet: Action = {
    id: 'user.get',
    endpoint: '/users/me',
    method: 'GET'
}

export const UserGetHistory: Action = {
    id: 'user.get-history',
    endpoint: '/users/me/history',
    method: 'GET'
}

export const UserUpdate: Action<{ user: any }> = {
    id: 'user.update',
    endpoint: '/users/me',
    method: 'PUT'
}

// ResourcesClient actions
export const ResourcesCreateDirectory: Action<{ type?: 'directory', location: string, name: string }> = {
    id: 'resources.create-directory',
    endpoint: '/resources',
    method: 'POST',
    //@ts-ignore
    payload: {
        type: 'directory'
    }
}

export const ResourcesCreate: Action<{ type: string, location: string, name: string, content?: any }> = {
    id: 'resources.create',
    endpoint: '/resources',
    method: 'POST'
}

export const ResourcesUpload: Action<{ location: string, type: string, name: string, size: number }> = {
    id: 'resources.upload',
    endpoint: '/resources',
    method: 'POST'
}

// This is for uploading different sizes of images etc.
export const ResourcesUploadNamedVersion: Action<{ id: string, name: string, size: number }> = {
    id: 'resources.upload-named-version',
    endpoint: '/resources/:id/:name',
    method: 'PUT'
}

export const ResourcesGet: Action<{ id: string }> = {
    id: 'resources.get',
    endpoint: '/resources/:id',
    method: 'GET',
}

export const ResourcesList: Action<{ search?: string }> = {
    id: 'resources.list',
    endpoint: '/resources?:search',
    method: 'GET',
}

export const ResourcesSearch: Action<{ query: any }> = {
    id: 'resources.search',
    endpoint: '/resources/search',
    method: 'POST'
}

export const ResourcesRemove: Action<{ id: string }> = {
    id: 'resources.remove',
    endpoint: '/resources/:id',
    method: 'DELETE'
}

export const ResourcesUpdateContent: Action<{ id: string, content: any }> = {
    id: 'resources.update-content',
    endpoint: '/resources/:id/content',
    method: 'PUT'
}

export const ResourcesMove: Action<{ id: string, target: string }> = {
    id: 'resources.move',
    endpoint: '/resources/:id/location',
    method: 'PUT'
}

export const ResourcesRename: Action<{ id: string, name: string }> = {
    id: 'resources.rename',
    endpoint: '/resources/:id/name',
    method: 'PUT'
}

// AuthClient actions
export const AuthSignUp: Action<{ email: string }> = {
    id: 'auth.sign-up',
    endpoint: '/users/sign-up',
    method: 'POST'
}

export const AuthSignIn: Action<{ email: string }> = {
    id: 'auth.sign-in',
    endpoint: '/users/sign-in',
    method: 'POST'
}

export const AuthVerifySignIn: Action<{ token: string }> = {
    id: 'auth.verify-sign-in',
    endpoint: '/users/verify-sign-in?token=:token',
    method: 'GET'
}

export const AuthVerifyInvitation: Action<{ workspaceId: string, token: string }> = {
    id: 'auth.verify-invitation',
    endpoint: '/workspaces/:workspaceId/invitations?token=:token',
    method: 'GET'
}

export const AuthGetAuthenticatedUser: Action = {
    id: 'auth.get-authenticated-user',
    endpoint: '/users/me',
    method: 'GET'
}

export const AuthGetAuthenticatedUserHistory: Action = {
    id: 'auth.get-authenticated-user-history',
    endpoint: '/users/me/history',
    method: 'GET'
}

export const AuthGetUser: Action<{ id: string }> = {
    id: 'auth.get-user',
    endpoint: '/users/:id',
    method: 'GET'
}

export const AuthSignOff: Action = {
    id: 'auth.sign-off',
    endpoint: '/users/sign-off',
    method: 'GET'
}