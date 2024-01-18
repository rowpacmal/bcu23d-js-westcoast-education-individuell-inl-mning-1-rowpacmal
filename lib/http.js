import { httpManager } from '../utils/httpManager.js';

export default class HttpClient {
  async get(resource) {
    return httpManager(resource);
  }
  async add(resource, data) {
    return httpManager(resource, 'POST', data);
  }
  async remove(resource) {
    httpManager(resource, 'DELETE');
  }
  async update(resource, data) {
    return httpManager(resource, 'PUT', data);
  }
}
