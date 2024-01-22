import { httpClient } from '/lib/http.js';

export const appManager = {
  getCourse: async (id = '') => {
    return httpClient(`courses/${id}`);
  },

  getStudent: async (id = '') => {
    return httpClient(`students/${id}`);
  },

  getTeacher: async (id = '') => {
    return httpClient(`teachers/${id}`);
  },

  addCourse: async (data) => {
    return httpClient('courses', 'POST', data);
  },

  addStudent: async (data) => {
    return httpClient('students', 'POST', data);
  },

  updateCourse: async (id, data) => {
    return httpClient(`courses/${id}`, 'PUT', data);
  },

  updateStudent: async (id, data) => {
    return httpClient(`students/${id}`, 'PUT', data);
  },

  remove: async (resource, id) => {
    return httpClient(`${resource}/${id}`, 'DELETE');
  },
};
