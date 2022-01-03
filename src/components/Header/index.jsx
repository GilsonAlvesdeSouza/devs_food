import React, { useState } from "react";
import { Container, Logo, SearchInput } from "./styled";

function Header({ search, onSearch }) {
  const [inputActive, setInputActive] = useState(search === "" ? false : true);

  const handleInputOnFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if (search === "") {
      setInputActive(false);
    }
  };

  const handleInputSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        active={inputActive}
        type={"text"}
        value={search}
        onChange={handleInputSearchChange}
        placeholder="Informe um produto"
        onFocus={handleInputOnFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}

export default Header;
