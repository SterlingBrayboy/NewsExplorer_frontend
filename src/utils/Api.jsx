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

  editUser(token, username) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username,
      }),
    }).then(this._checkResponse);
  }

  getArticles(searchQuery, from, to) {
    const queryParams = new URLSearchParams({
      searchQuery: searchQuery,
      from: from,
      to: to,
      apiKey: "9acf6131d4a84d1db347a5ffeac75266",
      pageSize: 100,
    });

    return fetch(`${this.baseUrl}?${queryParams}`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponse);
  }

  renderArticles(source, title, publishedAt, description, urlToImage) {
    return fetch(this.baseUrl + "/news", {
      method: "POST",
      headers: {
        ...this.headers,
      },
      body: JSON.stringify({
        source: source,
        title: title,
        publishedAt: publishedAt,
        description: description,
        urlToImage: urlToImage,
      }),
    }).then(this._checkResponse);
  }
}

export default Api;
