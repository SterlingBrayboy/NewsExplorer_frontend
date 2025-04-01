class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error ${res.status}`);
  }

  editUser(token, name, avatar) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        avatar,
      }),
    }).then(this._checkResponse);
  }
}

export default Api;
