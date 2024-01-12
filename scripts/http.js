// connect to the databases (.json files)
export default class HttpClient {
  // private field
  #url;

  constructor(url) {
    this.#url = url;
  }

  // get data from the database
  async get() {
    try {
      const reply = await fetch(this.#url);

      if (reply.ok) {
        return await reply.json();
      } else {
        throw new Error(`${reply.status} ${reply.statusText}`);
      }
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the get() method, please refer to the following ${error}`
      );
    }
  }

  // add new data to the database
  async set(data) {
    try {
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the set() method, please refer to the following ${error}`
      );
    }
  }

  // remove data from the database
  async delete() {
    try {
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the delete() method, please refer to the following ${error}`
      );
    }
  }

  // update data in the database
  async patch(data) {
    try {
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the patch() method, please refer to the following ${error}`
      );
    }
  }
}

console.log(new HttpClient('http://localhost:3000/land').get());
