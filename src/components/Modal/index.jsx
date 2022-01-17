import React from "react";
import ReactDOM from "react-dom";
import { Container, ModalBody, BtnModal } from "./styled";

const portalRoot = document.getElementById("portal-root");

function Modal({ children, isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Container onClick={() => closeModal(false)}>
      <ModalBody>
        <BtnModal type="button" onClick={() => closeModal(false)}>
          X
        </BtnModal>
        {children}
      </ModalBody>
    </Container>,
    portalRoot
  );
}

export default Modal;
