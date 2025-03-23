import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
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
          isOpen={activeModal === "login"}
        />
      )}
    </div>
  );
}

export default App;
