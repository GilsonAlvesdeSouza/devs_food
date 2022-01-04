import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components";
import API from "../../helpers/API";
import { Container } from "./styled";

function HomeScreen() {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState("");

  useEffect(() => {
    let api = API();
    const getCategories = async () => {
      const json = await api.getCategories();
      console.log(json);
    };
    getCategories();
  }, []);
  
  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
    </Container>
  );
}

export default HomeScreen;
