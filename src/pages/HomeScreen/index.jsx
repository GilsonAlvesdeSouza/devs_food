import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components";
import { Container, Titulo } from "./styled";

function HomeScreen() {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState("");

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
    </Container>
  );
}

export default HomeScreen;
