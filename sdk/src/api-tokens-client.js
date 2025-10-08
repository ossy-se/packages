export class ApiTokensClient {

  static of(config) {
    return new ApiTokensClient(config)
  }

  constructor(config) {
    this.http = config?.http
  }

  create({ name, description, expiresAt }) {
    return this.http.post('/users/me/tokens', { name, description, expiresAt })
  }

  getAll() {
    return this.http.get('/users/me/tokens')
  }

  invalidate(tokenId) {
    return this.http.delete(`/users/me/tokens/${tokenId}`)
  }

}
