import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import * as C from "../../components";
import * as S from "./styled";
import { API } from "../../helpers";

let searchTimer = null;

function HomeScreen() {
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [activeSearch, setActiveSearch] = useState("");

  const api = API();

  const getProducts = async () => {
    const prods = await api.getProducts();
    if (prods.error === "") {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProducts([]);
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, activePage, activeSearch]);

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);

  const handleCategories = () => {
    return categories.map((item, key) => (
      <C.CategoryItem
        key={`cat-${key}`}
        data={item}
        active={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    ));
  };

  const handleProducts = () => {
    return products.map((item, key) => (
      <C.ProductItem key={`product-${key}`} data={item} />
    ));
  };

  const handlePaginationItem = () => {
    return Array(totalPages)
      .fill(0)
      .map((item, index) => (
        <S.ProductPaginationItem
          key={`product-${index}`}
          activePage={activePage}
          current={index + 1}
          onClick={() => setActivePage(index + 1)}
        >
          {index + 1}
        </S.ProductPaginationItem>
      ));
  };

  return (
    <S.Container>
      <C.Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <S.CategoryArea>
          Selecione uma categoria
          <S.CategoryList>
            <C.CategoryItem
              data={{
                id: "",
                name: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
              active={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {handleCategories()}
          </S.CategoryList>
        </S.CategoryArea>
      )}
      {products.length > 0 && (
        <S.ProductArea>
          <S.ProductList>{handleProducts()}</S.ProductList>
        </S.ProductArea>
      )}
      {totalPages > 0 && (
        <S.ProductPaginationArea>
          {handlePaginationItem()}
        </S.ProductPaginationArea>
      )}
    </S.Container>
  );
}

export default HomeScreen;
