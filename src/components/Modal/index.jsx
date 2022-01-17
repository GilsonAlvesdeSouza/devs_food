import React from "react";
import ReactDOM from "react-dom";
import { Container, ModalBody, BtnModal } from "./styled";

const portalRoot = document.getElementById("portal-root");

function Modal({ children, isOpen, close }) {
  if (!isOpen) {
    return null;
  }

  const handleModalClick = (e) => {
      if(e.target.classList.contains('modalBg')){
          close(false);
      }
  };

  return ReactDOM.createPortal(
    <Container onClick={handleModalClick} className="modalBg">
      <ModalBody>
        <BtnModal type="button" onClick={() => close(false)}>
          X
        </BtnModal>
        {children}
      </ModalBody>
    </Container>,
    portalRoot
  );
}

export default Modal;
