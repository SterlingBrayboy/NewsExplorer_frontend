import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, isOpen, onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     handleLogin({ email, password });
  //   };

  return (
    <ModalWithForm
      title="Sign In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="1"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button className="modal__submit" type="submit">
        Sign In
      </button>
      <div className="modal__signup-container">
        <p>or</p>
        <button className="modal__signup" type="button" onClick={onSignUpClick}>
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
