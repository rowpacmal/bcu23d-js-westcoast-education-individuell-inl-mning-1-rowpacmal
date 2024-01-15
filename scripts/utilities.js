// *import* //
import HttpClient from './http.js';

// *database* //
// handle
const handleDatabase = async (method, database, id, data) => {
  const url = getURL(database, id);
  const http = new HttpClient(url);

  switch (method) {
    case 'GET':
      return http.get();

    case 'ADD':
      return http.add(data);

    case 'REMOVE':
      return http.remove();

    case 'UPDATE':
      return http.update(data);

    default:
      throw new Error(
        `An error occurred with the handleDatabase() function's output parameter[method]: ('${method}') is not a recognized option for the parameter. Valid options include ('GET', 'ADD', 'REMOVE', or 'UPDATE'). Please resolve this issue by providing the correct value for the method parameter.`
      );
  }
};

// *utilities* //
// get url
const getURL = (database, id) => {
  const localhost = 'http://localhost:3000';
  const server = `${localhost}/${database}`;

  if (id) {
    return `${server}/${id}`;
  } else {
    return server;
  }
};

// convert form
const convertFormData = (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  return data;
};

// *export* //
export { handleDatabase, convertFormData };
