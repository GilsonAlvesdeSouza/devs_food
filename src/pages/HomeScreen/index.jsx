import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header, CategoryItem } from "../../components";
import API from "../../helpers/API";
import { Container, CategoryArea, CategoryList } from "./styled";

function HomeScreen() {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let api = API();
    const getCategories = async () => {
      const json = await api.getCategories();
      if (json.error === "") {
        setCategories(json.result);
      }
    };
    getCategories();
  }, []);

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          Selecione uma categoria
          <CategoryList>
            <CategoryItem
              title="Todas as categorias"
              image="food-and-restaurant.png"
            />
          </CategoryList>
        </CategoryArea>
      )}
    </Container>
  );
}

export default HomeScreen;
