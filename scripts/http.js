// !================================! //
// !connect to the databases =======! //
// !================================! //
// *client* //
// export (default)
export default class HttpClient {
  #url;

  constructor(url) {
    this.#url = url;
  }

  // get data from the database
  async get() {
    return tryCatch('GET', this.#url);
  }

  // add new data to the database
  async add(data) {
    return tryCatch('POST', this.#url, data);
  }

  // remove data from the database
  async remove() {
    tryCatch('DELETE', this.#url);
  }

  // update data in the database
  async update(data) {
    return tryCatch('PUT', this.#url, data);
  }
}

// *utilities* //
// try catch
const tryCatch = async (method, url, data) => {
  const retrieve = fetchRequest(method, url, data);

  try {
    const response = await retrieve.request;

    if (method !== 'DELETE') {
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    }
  } catch (error) {
    throw new Error(
      `Something unexpected occurred with the ${retrieve.error} method. Please refer to the following ${error}`
    );
  }
};

// fetch request
const fetchRequest = (method, url, data) => {
  const retrieve = {};
  const request = getRequestOptions(method, data);

  console.log(request);

  switch (method) {
    case 'GET':
      retrieve.request = fetch(url);
      retrieve.error = 'get()';
      break;

    case 'POST':
      retrieve.request = fetch(url, request);
      retrieve.error = 'add()';
      break;

    case 'DELETE':
      retrieve.request = fetch(url, request);
      retrieve.error = 'remove()';
      break;

    case 'PUT':
      retrieve.request = fetch(url, request);
      retrieve.error = 'update()';
      break;

    default:
      throw new Error(
        `An error occurred with the tryCatch() function's output parameter[method: '${method}']. Please resolve the aforementioned issue by providing a value from one of the following: 'GET', 'POST', 'DELETE', or 'PUT'`
      );
  }

  return retrieve;
};

// get fetch request option
const getRequestOptions = (method, data) => {
  const request = { method: method };

  if (method === 'POST' || method === 'PUT') {
    request.headers = {
      'Content-Type': 'application/json',
    };
    request.body = JSON.stringify(data);
  }

  return request;
};
