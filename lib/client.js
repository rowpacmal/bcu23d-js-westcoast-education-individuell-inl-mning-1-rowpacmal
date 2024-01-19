import { httpManager } from '../utils/http.js';

export const httpClient = {
  get: async (resource) => {
    return httpManager(resource);
  },
  add: async (resource, data) => {
    return httpManager(resource, 'POST', data);
  },
  remove: async (resource) => {
    httpManager(resource, 'DELETE');
  },
  update: async (resource, data) => {
    return httpManager(resource, 'PUT', data);
  },
};
