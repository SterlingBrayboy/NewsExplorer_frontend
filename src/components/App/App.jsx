import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate } from "react-router-dom";
import { newsApiBaseUrl } from "../../utils/newsApi";

import Api from "../../utils/Api";
import Auth from "../../utils/Auth";
import { baseUrl } from "../../utils/constants";

const api = new Api({
  newsApiBaseUrl: newsApiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const auth = new Auth({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// function getArticles() {
//   return fetch(`${newsApiBaseUrl}` + "/articles", {
//     method: "GET",
//   });
// }

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [articles, setArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSignUpSuccess = () => {
    setActiveModal("success");
  };

  // Check if the article is already saved

  const handleSaveArticle = (article) => {
    if (!savedArticles.some((saved) => saved._id === article._id)) {
      setSavedArticles([...savedArticles, article]);
    }
  };

  // CLOSE MODAL WITH ESC METHOD

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  // REGISTRATION HANDLER

  const handleRegistration = ({ username, email, password }) => {
    if (username && email && password) {
      auth
        .registerUser({ username, email, password })
        .then((res) => {
          handleCloseModal();
        })
        .catch((err) => console.error(err));
    }
  };

  // LOGIN HANDLER

  const handleLogin = ({ email, password }) => {
    if (email && password) {
      auth
        .loginUser({ email, password })
        .then((token) => {
          return auth.verifyToken(token);
        })
        .then((currentUser) => {
          setCurrentUser(currentUser);
          console.log(currentUser);
          handleCloseModal();
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  };

  // LOGOUT HANDLER

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(currentUser === null);
    localStorage.removeItem("jwt");
  };

  // EDIT PROFILE HANDLER

  // const handleEditProfile = ({ username, avatar }) => {
  //   const token = localStorage.getItem("jwt");
  //   if (username) {
  //     api
  //       .editUser(token, username)
  //       .then((res) => {
  //         handleCloseModal();
  //         setCurrentUser(res);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth
        .verifyToken(token)
        .then((user) => {
          // Handle successful verification
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const handleSearch = (q) => {
    setHasSearched(true);
    setIsSearchLoading(true);

    api
      .getArticles(q)
      .then((res) => {
        setArticles(res.articles);
        setIsSearchLoading(true);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsSearchLoading(false);
      });
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App">
        <Header
          onCreateModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                articles={articles}
                isLoggedIn={isLoggedIn}
                handleSearch={handleSearch}
                hasSearched={hasSearched}
                isSearchLoading={isSearchLoading}
                handleSaveArticle={handleSaveArticle}
              />
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile articles={savedArticles} isLoggedIn={isLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        <Footer />
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            onCreateModal={handleLoginModal}
            handleLogin={handleLogin}
            onSignUpClick={handleRegisterModal}
            isOpen={activeModal === "login"}
          />
        )}
        {activeModal === "signup" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            onCreateModal={handleRegisterModal}
            handleRegistration={handleRegistration}
            onSignInClick={handleLoginModal}
            handleSignUpSuccess={handleSignUpSuccess}
            isOpen={activeModal === "signup"}
          />
        )}
        {activeModal === "success" && (
          <SuccessModal
            handleCloseModal={handleCloseModal}
            onSignInClick={handleLoginModal}
            isOpen={activeModal === "success"}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
