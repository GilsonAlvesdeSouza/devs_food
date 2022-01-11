import React from "react";
import { Container, CategoryImage } from "./styled";

function CategoryItem({ data, active, setActiveCategory }) {
  const { id, name, image } = data;

  const handleCategoryClick = () => {
    setActiveCategory(id);
  };

  return (
    <Container
      active={active}
      id={id}
      onClick={handleCategoryClick}
      data-tip={name}
      data-for="tip-top"
    >
      <CategoryImage src={image} />
    </Container>
  );
}

export default CategoryItem;
