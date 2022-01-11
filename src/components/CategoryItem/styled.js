import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({active, id}) => active === id ? '#fff' : "#aae09a"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease .4s;
`;

export const CategoryImage = styled.img`
  width: 53px;
  height: 53px;
`;
