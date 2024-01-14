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
    return tryCatch('get', 'GET', this.#url);
  }

  // add new data to the database
  async add(data) {
    return tryCatch('add', 'POST', this.#url, data);
  }

  // remove data from the database
  async remove() {
    tryCatch('remove', 'DELETE', this.#url);
  }

  // update data in the database
  async update(data) {
    return tryCatch('update', 'PUT', this.#url, data);
  }
}

// *utilities* //
// try catch
const tryCatch = async (name, method, url, data) => {
  const options = fetchRequestOptions(method, data);
  const fetchRequest = fetch(url, options);

  try {
    const response = await fetchRequest;

    if (method !== 'DELETE') {
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    }
  } catch (error) {
    throw new Error(
      `Something unexpected occurred with the ${name}() method. Please refer to the following ${error}`
    );
  }
};

// fetch request option
const fetchRequestOptions = (method, data) => {
  const options = { method: method };

  if (method === 'POST' || method === 'PUT') {
    options.headers = {
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify(data);
  }

  return options;
};
