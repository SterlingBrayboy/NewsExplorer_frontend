import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";

function App() {
  const [activeModal, setActiveModal] = useState(null);

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

  return (
    <div className="App">
      <Header onCreateModal={handleLoginModal} />
      <Main />
      <Footer />
      {activeModal === "login" && (
        <LoginModal
          handleCloseModal={handleCloseModal}
          onCreateModal={handleLoginModal}
          onSignUpClick={handleRegisterModal}
          isOpen={activeModal === "login"}
        />
      )}
      {activeModal === "signup" && (
        <RegisterModal
          handleCloseModal={handleCloseModal}
          onCreateModal={handleRegisterModal}
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
  );
}

export default App;
