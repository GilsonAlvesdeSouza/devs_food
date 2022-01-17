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

function ModalProduct({ data }) {
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>{data.name}</ProductDetails>
          <ProductQuantityArea>quantidade</ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons></ProductButtons>
    </Container>
  );
}

export default ModalProduct;
