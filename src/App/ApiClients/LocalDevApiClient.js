export class LocalDevApiClient {
  #baseUrl = '';
  #headers = { accept: 'application/json' };

  constructor({ baseUrl, headers }) {
    if (!baseUrl) console.error('Nie podano base URL');
    this.#baseUrl = baseUrl;
    if (headers) this.#headers = { ...this.#headers, ...headers };
  }

  async #useFetch(requestPath, options) {
    try {
      const response = await fetch(this.#baseUrl + requestPath, options);
      if (!response.ok) throw new Error(response.status);
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getAllToDos(signal = undefined) {
    const requestPath = 'api/todo/';
    const headers = this.#headers;
    const options = { headers, method: 'GET', signal };
    return this.#useFetch(requestPath, options);
  }
  getToDo(id) {
    const requestPath = 'api/todo/';
    const headers = this.#headers;
    const options = { headers, method: 'GET' };
    return this.#useFetch(requestPath, options);
  }
  async deleteToDo(id) {
    const requestPath = `api/todo/${id}`;
    const headers = this.#headers;
    const options = { headers, method: 'DELETE' };
    return this.#useFetch(requestPath, options);
  }
  async markAsDone(id) {
    const requestPath = `api/todo/${id}/markAsDone`;
    const headers = this.#headers;
    const options = { headers, method: 'PUT' };
    return this.#useFetch(requestPath, options);
  }
  addToDo(todo) {
    const requestPath = `api/todo/`;
    const headers = { ...this.#headers, 'Content-Type': 'application/json' };
    const { title, note, author } = todo;
    const body = JSON.stringify({ title, note, author });
    const options = { headers, method: 'POST', body };
    return this.#useFetch(requestPath, options);
  }
  updateToDo(id, todo) {
    const requestPath = `api/todo/${id}`;
    const headers = { ...this.#headers, 'Content-Type': 'application/json' };
    const { title, note, author } = todo;
    const body = JSON.stringify({ title, note, author });
    const options = { headers, method: 'PUT', body };
    return this.#useFetch(requestPath, options);
  }
}
