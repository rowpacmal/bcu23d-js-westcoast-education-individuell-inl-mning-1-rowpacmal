import { Course } from '../models/CourseModel.js';
import { httpClient } from '../utils/http.js';

export async function getCourse(id: string = ''): Promise<Course> {
  const course: Course = await httpClient<Course>(`courses/${id}`);
  return course;
}

export async function updateCourse(id: string, data: Course): Promise<Course> {
  const course: Course = await httpClient<Course>(`courses/${id}`, 'PUT', data);
  return course;
}
