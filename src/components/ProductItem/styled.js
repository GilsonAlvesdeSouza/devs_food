import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  display: flex;
  align-items: center;
  color: #136713;
  cursor: pointer;
  transition: all ease 0.4s;

  :hover{
      opacity: 0.8;
  }
`;

export const ProductImgArea = styled.div`
  width: 100px;
`;

export const ProductImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin: 0 10px 0 10px;
`;

export const ProductButtonArea = styled.div``;

export const ProductName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 0.875rem;
`;

export const ProductIngredients = styled.div`
  font-size: 0.688rem;
`;

export const ProductButton = styled.img`
  width: 15px;
`;
