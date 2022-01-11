import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header, CategoryItem } from "../../components";
import API from "../../helpers/API";
import { Container, CategoryArea, CategoryList } from "./styled";

function HomeScreen() {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const [activeCategory, setActiveCategory] = useState("");

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

  const handleCategories = () => {
    return categories.map((item, key) => (
      <CategoryItem key={`cat-${key}`} data={item} active={activeCategory}/>
    ));
  };

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          Selecione uma categoria
          <CategoryList>
            <CategoryItem
              data={{
                id: "",
                title: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
              active={activeCategory}
            />
            {handleCategories()}
          </CategoryList>
        </CategoryArea>
      )}
    </Container>
  );
}

export default HomeScreen;
