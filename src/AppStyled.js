import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ff0000;
`;

export const Menu = styled.div`
  display: flex;
  background-color: #136713;
  width: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageBody = styled.div`
  display: flex;
  background-image: url("/assets/bg.png");
  background-color: #00980d;
  flex: 1;
  overflow-y: auto;
`;
