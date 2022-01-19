import React from "react";
import * as S from "./styled";
import { Format } from "../../helpers";

function ModalProduct({ data }) {
  const format = Format();

  return (
    <S.Container>
      <S.ProductArea>
        <S.ProductPhoto src={data.image} />
        <S.ProductInfoArea>
          <S.ProductDetails>
            <S.ProductName>{data.name}</S.ProductName>
            <S.ProductIngredients>{data.ingredients}</S.ProductIngredients>
          </S.ProductDetails>
          <S.ProductQuantityArea>
            <S.ProductQuantity>
              <S.ProductQuantityImage src="/assets/minus.png"></S.ProductQuantityImage>
              <S.ProductQuantityText>9</S.ProductQuantityText>
              <S.ProductQuantityImage src="/assets/plus.png"></S.ProductQuantityImage>
            </S.ProductQuantity>
            <S.ProductPrice>{format.currency(data.price)}</S.ProductPrice>
          </S.ProductQuantityArea>
        </S.ProductInfoArea>
      </S.ProductArea>
      <S.ProductButtons>
        <S.ProductButton font_size={0.875} small={true}>
          Cancelar
        </S.ProductButton>
        <S.ProductButton font_size={1.375} font_weight="bold">
          Adicionar ao Carrinho
        </S.ProductButton>
      </S.ProductButtons>
    </S.Container>
  );
}

export default ModalProduct;
