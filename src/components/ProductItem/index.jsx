import React from "react";
import * as St from "./styled";
import { Format } from "../../helpers";

function ProductItem({ data, onClick }) {
  const { image, name, price, ingredients } = data;
  const format = Format();

  return (
    <St.Container onClick={() => onClick(data)}>
      <St.ProductImgArea>
        <St.ProductImg src={image} />
      </St.ProductImgArea>
      <St.ProductInfoArea>
        <St.ProductName>{name}</St.ProductName>
        <St.ProductPrice>{format.currency(price)}</St.ProductPrice>
        <St.ProductIngredients>{ingredients}</St.ProductIngredients>
      </St.ProductInfoArea>
      <St.ProductButtonArea>
        <St.ProductButton src="/assets/next.png"></St.ProductButton>
      </St.ProductButtonArea>
    </St.Container>
  );
}

export default ProductItem;
