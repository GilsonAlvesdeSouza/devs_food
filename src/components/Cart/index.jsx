import React, { useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./styled";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const [cartIsOpen, setCartIsOpen] = useState(false);

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

  return (
    <S.CartArea>
      <S.CartHeader onClick={() => setCartIsOpen(!cartIsOpen)}>
        <S.CartIcon src="/assets/cart.png" />
        <S.CartText>Meu Carrinho {handleProductsQuantity()}</S.CartText>
        {cartIsOpen && <S.CartIcon src="/assets/down.png" />}
      </S.CartHeader>
      <S.CartBody open={cartIsOpen}>initial</S.CartBody>
    </S.CartArea>
  );
}

export default Cart;
