export class UserClient {

  static of(config) {
    return new UserClient(config)
  }

  constructor(config) {
    this.http = config?.http
    
    this.services = {
      enable: x => this.enableService(x),
      disable: x => this.disableService(x)
    }

    this.details = () => this.getUser()
    this.history = () => this.getHistory()

  }

  getUser() {
    return this.http.get('/users/me')
  }

  getHistory() {
    return this.http.get('/users/me/history')
  }

  update(user) {
    return this.http.put('/users/me', user)
  }

}
