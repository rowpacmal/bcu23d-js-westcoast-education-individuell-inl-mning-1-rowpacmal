// *import* //
import HttpClient from './http.js';

// *controls* //
const localhost = 'http://localhost:3000';

// *database* //
// get
const getFromDatabase = async (database, id) => {
  return loadDatabase('GET', database, id);
};

// add
const saveToDatabase = async (database, data) => {
  loadDatabase('ADD', database, '', data);
};

// remove
const deleteFromDatabase = async (database, id) => {
  loadDatabase('REMOVE', database, id);
};

// update
const updateDatabase = async (database, id, data) => {
  loadDatabase('UPDATE', database, id, data);
};

// load
const loadDatabase = async (method, database, id, data) => {
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
        `An error occurred with the loadDatabase() function's output parameter[method: '${method}']. Please resolve the aforementioned issue by providing a value from one of the following: 'GET', 'ADD', 'REMOVE', or 'UPDATE'`
      );
  }
};

// *utilities* //
// get url
const getURL = (database, id) => {
  const host = localhost;
  const location = database;

  if (id) {
    return `${host}/${location}/${id}`;
  } else {
    return `${host}/${location}`;
  }
};

// convert form
const convertFormData = (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  return data;
};

// *export* //
export {
  getFromDatabase,
  saveToDatabase,
  deleteFromDatabase,
  updateDatabase,
  convertFormData,
};
