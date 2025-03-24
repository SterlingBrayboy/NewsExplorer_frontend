import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SuccessModal = ({ handleCloseModal, isOpen, onSignInClick }) => {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      onClose={handleCloseModal}
      isOpen={isOpen}
    >
      <div className="modal__signin-container">
        <button className="modal__signin" type="button" onClick={onSignInClick}>
          Sign In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SuccessModal;
