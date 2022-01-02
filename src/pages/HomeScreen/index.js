import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components";
import { Container, Titulo } from "./styled";

function HomeScreen() {
  const history = useHistory();

  return (
    <Container>
      <Header />
    </Container>
  );
}

export default HomeScreen;
