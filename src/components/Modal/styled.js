import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 0px 50px #000;
  max-height: 90vh;
  max-width: 100vh;
  overflow: auto;
`;

export const BtnModal = styled.button`
  float: right;
  background: unset;
  border: unset;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #ff0000;
  }
`;