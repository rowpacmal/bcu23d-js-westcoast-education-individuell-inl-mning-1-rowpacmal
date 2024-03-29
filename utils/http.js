import { settings } from './config.js';

export const httpClient = async (resource, method = 'GET', data) => {
  try {
    const endpoint = `${settings.BASE_URL}${resource}`;
    const options = { method: method };

    switch (method) {
      case 'POST':
      case 'PUT':
        options.headers = {
          'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
        break;
    }

    const response = await fetch(endpoint, options);

    if (method !== 'DELETE') {
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
