// *import* //
import HttpClient from './http.js';

// *database* //
// get
const getFromDatabase = async (database) => {
  const url = `http://localhost:3000/${database}`;

  return await new HttpClient(url).get();
};

// add
const saveToDatabase = async (database, data) => {
  const url = `http://localhost:3000/${database}`;

  await new HttpClient(url).add(data);
};

// remove
const deleteFromDatabase = async (database, id) => {
  const url = `http://localhost:3000/${database}/${id}`;

  return await new HttpClient(url).remove();
};

// update
const updateDatabase = async (database, id, data) => {
  const url = `http://localhost:3000/${database}/${id}`;

  await new HttpClient(url).update(data);
};

// *export* //
export { getFromDatabase, saveToDatabase, deleteFromDatabase, updateDatabase };
