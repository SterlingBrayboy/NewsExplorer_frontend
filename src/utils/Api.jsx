class Api {
  constructor({ baseUrl, headers, newsApiBaseUrl, from, to }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.newsApiBaseUrl = newsApiBaseUrl;
    this.from = from;
    this.to = to;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error ${res.status}`);
  }

  getArticles(searchQuery) {
    const url = `${this.newsApiBaseUrl}/v2/everything?q=${searchQuery}&apiKey=9acf6131d4a84d1db347a5ffeac75266`;
    return fetch(url, {
      method: "GET",
      headers: {
        // "x-api-key": "9acf6131d4a84d1db347a5ffeac75266",
        ...this.headers,
      },
    }).then(this._checkResponse);
  }

  editUser(token, username) {
    return new Promise((resolve, reject) => {
      resolve({ username });
    });
    // return fetch(this.baseUrl + "/users/me", {
    //   method: "PATCH",
    //   headers: {
    //     ...this.headers,
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify({
    //     username,
    //   }),
    // }).then(this._checkResponse);
  }

  // renderArticles(source, title, publishedAt, description, urlToImage) {
  //   return fetch(this.baseUrl + "/news", {
  //     method: "POST",
  //     headers: {
  //       ...this.headers,
  //     },
  //     body: JSON.stringify({
  //       source: source,
  //       title: title,
  //       publishedAt: publishedAt,
  //       description: description,
  //       urlToImage: urlToImage,
  //     }),
  //   }).then(this._checkResponse);
  // }
}

export default Api;
