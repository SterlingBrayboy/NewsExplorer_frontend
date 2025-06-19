import "./ModalWithForm.css";
import close from "../../images/close.svg";

const ModalWithForm = ({ children, title, onClose, name, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <form onSubmit={onSubmit} className="modal__form" id="modal-form">
          <button
            src={close}
            className="modal__close"
            type="button"
            onClick={onClose}
          />
          <h3 className="modal__title"> {title} </h3>
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
