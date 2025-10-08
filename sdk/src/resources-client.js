export class ResourcesClient {

  static of(config) {
    return new ResourcesClient(config)
  }

  constructor(config) {
    this.http = config?.http
  }

  createDirectory({ location, name }) {
    return this.http.post(`/resources`, {
      type: 'directory',
      location: location,
      name: name
    })
  }

  //** Deprecated **//
  createDocument(document) {
    return this.create(document);
  }

  create(document) {
    return this.http.post(`/resources`, {
      type: document.type,
      location: document.location,
      name: document.name,
      content: document.content
    })
  }

  upload({ location = '/', file }) {
    return this.http.post(`/resources`, {
        type: file.type,
        location: location,
        name: file.name,
        size: file.size
    })
    .then(resource => {
      return fetch(resource.content.uploadUrl, { method: 'PUT', body: file })
        .then(() => resource)
    })
  }

  // This is for uploading different sizes of images
  uploadNamedVersion({ resourceId, name, file }) {
    return this.http.put(`/resources/${resourceId}/${name}`, {
        type: file.type,
        size: file.size
    })
    .then(resource => {
      return fetch(resource.content.uploadUrl, { method: 'PUT', body: file })
        .then(() => resource)
    })
  }

  byId(resourceId) {
    return this.http.get(`/resources/${resourceId}`)
  }

  byLocation(location = '/') {
    return this.http.get(`/resources?location=${location}`)
  }

  get(query = {}) {

    if (typeof query === 'string') {
      return this.byId(query)
    }

    const search = new URLSearchParams(query).toString()
    return this.http.get(`/resources?${search}`)    
  }

  // for complex queries where not all parameters can be serialized in the URL
  search(query = {}) {

    if (typeof query === 'string') {
      return this.byId(query)
    }

    return this.http.post(`/resources/search`, query)    
  }

  remove(resourceId) {
    return this.http.delete(`/resources/${resourceId}`)
  }

  updateContent(resourceId, resourceContent) {
    return this.http.put(`/resources/${resourceId}/content`, resourceContent)
  }

  move(resourceId, newLocation) {
    return this.http.put(
      `/resources/${resourceId}/location`,
      newLocation
    )
  }

  rename(resourceId, newName) {
    return this.http.put(
      `/resources/${resourceId}/name`,
      newName
    )
  }

}
