import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styled";
import { Format } from "../../helpers";

function ModalProduct({ data, close }) {
  const format = Format();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { data, quantity },
    });
    close(false);
  };

  return (
    <S.Container>
      <S.ProductArea>
        <S.ProductPhoto src={data.image} />
        <S.ProductInfoArea>
          <S.ProductDetails>
            <S.ProductName>{data.name}</S.ProductName>
            <S.ProductIngredients>{data.ingredients}</S.ProductIngredients>
            <S.ProductPrice>{format.currency(data.price)}</S.ProductPrice>
          </S.ProductDetails>
          <S.ProductQuantityArea>
            <S.ProductQuantity>
              <S.ProductQuantityImage
                src="/assets/minus.png"
                onClick={handleMinusQuantity}
              ></S.ProductQuantityImage>
              <S.ProductQuantityText>{quantity}</S.ProductQuantityText>
              <S.ProductQuantityImage
                src="/assets/plus.png"
                onClick={handlePlusQuantity}
              ></S.ProductQuantityImage>
            </S.ProductQuantity>
            <S.ProductPrice>
              {format.currency(data.price * quantity)}
            </S.ProductPrice>
          </S.ProductQuantityArea>
        </S.ProductInfoArea>
      </S.ProductArea>
      <S.ProductButtons>
        <S.ProductButton
          font_size={0.875}
          small={true}
          onClick={() => close(false)}
        >
          Cancelar
        </S.ProductButton>
        <S.ProductButton
          font_size={1.375}
          font_weight="bold"
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </S.ProductButton>
      </S.ProductButtons>
    </S.Container>
  );
}

export default ModalProduct;
