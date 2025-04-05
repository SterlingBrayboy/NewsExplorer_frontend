import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  onSignInClick,
  handleRegistration,
  handleSignUpSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    checkFormValidity(e.target.value, password);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    checkFormValidity(e.target.value, email);
  };

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
    checkFormValidity(e.target.value, username);
  };

  const checkFormValidity = () => {
    if (email.trim() && password.trim() && username.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ username, email, password });
    handleSignUpSuccess();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="username"
          name="username"
          minLength="1"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <button
        className={`modal__submit ${
          isButtonDisabled ? "modal__submit--disabled" : ""
        }`}
        type="submit"
        disabled={isButtonDisabled}
      >
        Sign Up
      </button>
      <div className="modal__signin-container">
        <p>or</p>
        <button className="modal__signin" type="button" onClick={onSignInClick}>
          Sign In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
