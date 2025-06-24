class Auth {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error ${res.status}`);
  }

  _addToStorage(res) {
    localStorage.setItem("jwt", res.token);
    return res.token;
  }

  registerUser({ username, email, password }) {
    return new Promise((resolve, reject) => {
      resolve({ username });
    });
    // return fetch(this.baseUrl + "/signup", {
    //   method: "POST",
    //   headers: this._headers,
    //   body: JSON.stringify({
    //     username,
    //     email,
    //     password,
    //   }),
    // }).then(this._checkResponse);
  }

  loginUser({ email, password }) {
    return new Promise((resolve, reject) => {
      resolve({ token: "2402498294924828428298" });
    }).then(this._addToStorage);
    // return fetch(this.baseUrl + "/signin/", {
    //   method: "POST",
    //   headers: this._headers,
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
    //   .then(this._checkResponse)
  }

  verifyToken({ token }) {
    return new Promise((resolve, reject) => {
      resolve({
        id: "09u540293u343",
        email: "foo@example.com",
        username: "foofoo",
        avatar:
          "https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      });
    });
    // return fetch(this.baseUrl + "/users/me", {
    //   method: "GET",
    //   headers: {
    //     ...this._headers,
    //     Authorization: `Bearer ${token}`,
    //   },
    // }).then(this._checkResponse);
  }
}

export default Auth;
