import React from "react";
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
} from "./styled";

function ModalProduct() {
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src="" />
        <ProductInfoArea>
          <ProductDetails>detalhes</ProductDetails>
          <ProductQuantityArea></ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons></ProductButtons>
    </Container>
  );
}

export default ModalProduct;
