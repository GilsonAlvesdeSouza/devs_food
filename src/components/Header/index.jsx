import React, { useState } from "react";
import { Container, Logo, SearchInput } from "./styled";

function Header() {
  const [inputActive, setInputActive] = useState(false);

  const handleInputOnFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        active={inputActive}
        type={"text"}
        placeholder="Informe um produto"
        onFocus={handleInputOnFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}

export default Header;
