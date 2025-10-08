import { mergeRight } from 'ramda'

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export class Http {

  static of(config) {
    return new Http(config)
  }


  constructor(config) {
    this.baseUrl = config.baseUrl

    if (typeof config?.headers === 'object') {
      this.getHeaders = () => Promise.resolve({
        ...defaultHeaders,
        ...config.headers
      })
    }

    if (typeof config?.headers === 'function') {
      this.getHeaders = config.headers
    }
  }

  post(endpoint, body) {

    const config = {
      method: 'POST',
      body: JSON.stringify(body)
    }

    return this.fetch(endpoint, config)
  }

  get(endpoint) {
    const config = { method: 'GET' }
    return this.fetch(endpoint, config)
  }

  delete(endpoint) {
    const config = { method: 'DELETE' }
    return this.fetch(endpoint, config)
  }

  put(endpoint, body) {

    const config = {
      method: 'PUT',
      body: JSON.stringify(body)
    }

    return this.fetch(endpoint, config)
  }

  async fetch(endpoint, config) {
    const headers = await this.getHeaders()
    
    const defaultConfig = {
      headers: headers,
      credentials: 'include'
    }

    return fetch(
      `${this.baseUrl}${endpoint}`,
      mergeRight(config, defaultConfig)
    ).then(response => {
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
