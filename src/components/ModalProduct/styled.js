import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  padding: 15px;
  color: #0b4d0b;
`;

export const ProductArea = styled.div`
  height: 200px;
  display: flex;
`;

export const ProductPhoto = styled.img`
  width: 310px;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const ProductIngredients = styled.div`
  font-size: 0.875rem;
`;

export const ProductQuantityArea = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: #0b4d0b;
  padding: 10px;
  border-radius: 10px;
`;

export const ProductQuantityImage = styled.img`
  width: 20px;
  height: auto;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  padding: 2px;

  :hover {
    opacity: 0.7;
  }
`;

export const ProductQuantityText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const ProductPrice = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const ProductButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ProductButton = styled.button`
  border: 0;
  background-color: #073c07;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
  color: #fff;
  border-radius: 5px;
  font-size: ${({ font_size }) => font_size}rem;
  font-weight: ${({ font_weight }) => font_weight};
  padding: ${({ small }) => (small ? "5px 10px" : "10px 20px")};
  margin-left: 10px;
  cursor: pointer;
  transition: ease all 0.4s;

  :hover {
    opacity: 0.9;
  }
`;
