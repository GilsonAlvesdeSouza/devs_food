import React from "react";
import { CartArea, CartHeader, CartIcon, CartText, CartBody } from "./styled";

function Cart() {
  return (
    <CartArea>
      <CartHeader>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho (X)</CartText>
      </CartHeader>
      <CartBody></CartBody>
    </CartArea>
  );
}

export default Cart;
