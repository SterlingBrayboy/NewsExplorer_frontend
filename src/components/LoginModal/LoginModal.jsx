import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  handleLogin,
  onSignUpClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    checkFormValidity(e.target.value, email);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    checkFormValidity(e.target.value, password);
  };

  const validateEmail = (email) => {
    const isValid = email.includes("@") && email.includes(".");
    setIsEmailValid(isValid);
  };

  const checkFormValidity = () => {
    if (email.trim() && password.trim() && isEmailValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className={`modal__input ${
            !isEmailValid ? "modal__input--error" : ""
          }`}
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
        {!isEmailValid && (
          <span className="modal__input--error">invalid email address</span>
        )}
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
      <button
        className={`modal__submit ${
          isButtonDisabled ? "modal__submit--disabled" : ""
        }`}
        type="submit"
        disabled={isButtonDisabled}
      >
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
