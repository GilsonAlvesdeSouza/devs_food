import React from "react";
import { Container, Logo, SearchInput } from "./styled";

function Header() {
  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput type={"text"} placeholder="Informe um produto" />
    </Container>
  );
}

export default Header;
