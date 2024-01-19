import { httpClient } from './client.js';

export const appManager = {
  getAllCourses: async () => {
    return await httpClient.get('courses');
  },
  getCourse: async (id) => {
    return await httpClient.get(`courses/${id}`);
  },
  addCourse: async (data) => {
    return await httpClient.add('courses', data);
  },
  removeCourse: async (id) => {
    if (
      confirm(
        `Do you want to permanently remove the course[id=${id}] from the system?`
      )
    ) {
      alert(`Course[id=${id}] has been permanently removed from the system.`);
      await httpClient.remove(`courses/${id}`);
    }
  },
  updateCourse: async (id, data) => {
    return await httpClient.update(`courses/${id}`, data);
  },
};
