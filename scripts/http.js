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
        `Something unexpected occurred with the get() method. Please refer to the following ${error}`
      );
    }
  }

  // *add new data to the database* //
  async add(data) {
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
        `Something unexpected occurred with the add() method. Please refer to the following ${error}`
      );
    }
  }

  // *remove data from the database* //
  async remove() {
    try {
      const reply = await fetch(this.#url, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error(
        `Something unexpected occurred with the remove() method. Please refer to the following ${error}`
      );
    }
  }

  // *update data in the database* //
  async update(data) {
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
        `Something unexpected occurred with the update() method. Please refer to the following ${error}`
      );
    }
  }
}
