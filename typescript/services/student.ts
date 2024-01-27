import { Student } from '../models/StudentModel.js';
import { httpClient } from '../utils/http.js';

export async function getStudent(id: string = ''): Promise<Student> {
  const student: Student = await httpClient<Student>(`students/${id}`);
  return student;
}

export async function updateStudent(
  id: string,
  data: Student
): Promise<Student> {
  const student: Student = await httpClient<Student>(
    `students/${id}`,
    'PUT',
    data
  );
  return student;
}
