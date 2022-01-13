import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { Header, CategoryItem, ProductItem } from "../../components";
import API from "../../helpers/API";
import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
} from "./styled";

function HomeScreen() {
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [products, setProducts] = useState([]);
  const api = API();

  const getProducts = async () => {
    const prods = await api.getProducts();
    if (prods.error === "") {
      setProducts(prods.result.data);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const json = await api.getCategories();
      if (json.error === "") {
        setCategories(json.result);
      }
      ReactTooltip.rebuild();
    };
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [activeCategory]);

  const handleCategories = () => {
    return categories.map((item, key) => (
      <CategoryItem
        key={`cat-${key}`}
        data={item}
        active={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    ));
  };

  const handleProducts = () => {
    return products.map((item, key) => (
      <ProductItem key={`product-${key}`} data={item} />
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
                name: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
              active={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {handleCategories()}
          </CategoryList>
        </CategoryArea>
      )}
      {products.length > 0 && (
        <ProductArea>
          <ProductList>{handleProducts()}</ProductList>
        </ProductArea>
      )}
    </Container>
  );
}

export default HomeScreen;
