import React from "react";
import { Container, CategoryImage } from "./styled";

function CategoryItem({ data, active, setActiveCategory }) {
  const { id, title, image } = data;

  const handleCategoryClick = () => {
    setActiveCategory(id);
  };

  return (
    <Container active={active} id={id} onClick={handleCategoryClick}>
      <CategoryImage src={image} />
    </Container>
  );
}

export default CategoryItem;
