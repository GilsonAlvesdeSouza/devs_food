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

export const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 50px #000;
  max-height: 90vh;
  max-width: 100vw;
  overflow: auto;
`;

export const BtnModal = styled.button`
  color: #fff;
  background: unset;
  border: unset;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  :hover {
    color: #ff0000;
  }
`;
