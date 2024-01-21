import { httpClient } from '../utils/http.js';

export const appManager = {
  get: async (resource, id = '') => {
    return httpClient(`${resource}/${id}`);
  },

  add: async (resource, data) => {
    return httpClient(resource, 'POST', data);
  },

  remove: async (resource, id) => {
    return httpClient(`${resource}/${id}`, 'DELETE');
  },

  update: async (resource, id, data) => {
    return httpClient(`${resource}/${id}`, 'PUT', data);
  },
};
