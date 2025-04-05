import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate } from "react-router-dom";

import Api from "../../utils/Api";
import Auth from "../../utils/Auth";
import { baseUrl } from "../../utils/constants";

const api = new Api({
  baseUrl: baseUrl,
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

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
          handleCloseModal();
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  };

  // LOGOUT HANDLER

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setCurrentUser(currentUser === null);
  //   localStorage.removeItem("jwt");
  // };

  // EDIT PROFILE HANDLER

  const handleEditProfile = ({ username, avatar }) => {
    const token = localStorage.getItem("jwt");
    if (username) {
      api
        .editUser(token, username)
        .then((res) => {
          handleCloseModal();
          setCurrentUser(res);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      // Call a function to verify the token
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

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App">
        <Header onCreateModal={handleLoginModal} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
          />
        </Routes>
        <SearchForm />
        {/* <Preloader /> */}
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
