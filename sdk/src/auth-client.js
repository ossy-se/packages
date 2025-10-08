export class AuthClient {

  static of(config) {
    return new AuthClient(config)
  }

  constructor(config) {
    this.http = config?.http
  }

  signUp(email) {
    return this.http.post('/users/sign-up', email)
  }

  signIn(email) {
    return this.http.post('/users/sign-in', email)
  }

  verifySignIn(token) {
    return this.http.get(`/users/verify-sign-in?token=${token}`)
  }

  verifyInvitation(workspaceId, token) {
    return this.http.get(`/workspaces/${workspaceId}/invitations?token=${token}`)
  }

  getAuthenticatedUser() {
    return this.http.get(`/users/me`)
  }

  getAuthenticatedUserHistory() {
    return this.http.get(`/users/me/history`)
  }

  getUser(userId) {
    return this.http.get(`/users/${userId}`)
  }

  signOff() {
    return this.http.get('/users/sign-off')
  }

}
