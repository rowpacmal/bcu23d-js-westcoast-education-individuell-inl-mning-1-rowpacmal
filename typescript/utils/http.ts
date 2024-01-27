import { Course } from '../models/CourseModel.js';
import { BaseMethod, PatchMethod } from '../models/MethodModel.js';
import { Student } from '../models/StudentModel.js';
import { state } from './config.js';

export async function httpClient<T>(
  endpoint: string,
  method: string = 'GET',
  data?: Course | Student
): Promise<T> {
  const url: string = `${state.BASE_URL}${endpoint}`;
  let options;

  switch (method) {
    case 'GET':
    case 'DELETE':
      const baseMethod: BaseMethod = {
        method: method,
      };
      options = baseMethod;
      break;

    case 'POST':
    case 'PUT':
      const patchMethod: PatchMethod = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      options = patchMethod;
      break;

    default:
      throw new Error(
        `'${method}' is not a valid method parameter for httpClient()`
      );
  }

  try {
    const response: Response = await fetch(url, options);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
}
