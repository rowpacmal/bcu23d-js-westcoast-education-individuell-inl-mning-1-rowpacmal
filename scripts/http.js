// !================================! //
// !connect to the databases =======! //
// !================================! //
export default class HttpClient {
  // private field
  #url;

  constructor(url) {
    this.#url = url;
  }

  // *get data from the database* //
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

  // *add new data to the database* //
  async set(data) {
    try {
      const reply = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (reply.ok) {
        return await reply.json();
      } else {
        throw new Error(`${reply.status} ${reply.statusText}`);
      }
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the set() method, please refer to the following ${error}`
      );
    }
  }

  // *remove data from the database* //
  async delete() {
    try {
      const reply = await fetch(this.#url, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the delete() method, please refer to the following ${error}`
      );
    }
  }

  // *update data in the database* //
  async patch(data) {
    try {
      const reply = await fetch(this.#url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (reply.ok) {
        return await reply.json();
      } else {
        throw new Error(`${reply.status} ${reply.statusText}`);
      }
    } catch (error) {
      throw new Error(
        `Something unexpected occur with the patch() method, please refer to the following ${error}`
      );
    }
  }
}
