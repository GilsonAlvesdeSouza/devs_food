import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Format } from "../../helpers";

import * as S from "./styled";

function Cart() {
  const format = Format();
  const products = useSelector((state) => state.cart.products);
  const [cartIsOpen, setCartIsOpen] = useState(true);

  const handleProductsQuantity = () => {
    switch (products.length) {
      case 0:
        return "";
      case 1:
        return `( ${products.length} item )`;

      default:
        return `( ${products.length} itens )`;
    }
  };

  const handleProductsList = () => {
    return products.map((item, key) => (
      <S.ProductItem key={`list-prod${key}`}>
        <S.ProductPhoto src={item.image} />
        <S.ProductInfoArea>
          <S.ProductName>{item.name}</S.ProductName>
          <S.ProductPrice>{format.currency(item.price)}</S.ProductPrice>
        </S.ProductInfoArea>
        <S.ProductQuantityArea>{item.quantity}</S.ProductQuantityArea>
      </S.ProductItem>
    ));
  };

  return (
    <S.CartArea>
      <S.CartHeader onClick={() => setCartIsOpen(!cartIsOpen)}>
        <S.CartIcon src="/assets/cart.png" />
        <S.CartText>Meu Carrinho {handleProductsQuantity()}</S.CartText>
        {cartIsOpen && <S.CartIcon src="/assets/down.png" />}
      </S.CartHeader>
      <S.CartBody open={cartIsOpen}>
        <S.ProductsArea>
          {products.length > -1 && handleProductsList()}
        </S.ProductsArea>
      </S.CartBody>
    </S.CartArea>
  );
}

export default Cart;
