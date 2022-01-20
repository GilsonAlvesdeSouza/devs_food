import styled from "styled-components";

export const CartArea = styled.div`
  background-color: #136713;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0;
  right: 30px;
  padding: 5px;
`;

export const CartHeader = styled.div`
  display: flex;
  width: 350px;
  height: 50px;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 23px;
  height: auto;
  margin: 0 10px 0 10px;
`;

export const CartText = styled.div`
  flex: 1;
  color: #fff;
  font-size: 1.063rem;
`;

export const CartBody = styled.div`
  display: ${({ open }) => (!open ? "none" : "block")};
  color: #fff;
`;

export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
  display: flex;
  margin: 10px;
`;

export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.div`
  font-size: 0.938rem;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 0.813rem;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQuantityIcon = styled.img`
  width: 13px;
  height: auto;
  margin: 5px;
`;

export const ProductText = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  margin: 0 5px;
`;
