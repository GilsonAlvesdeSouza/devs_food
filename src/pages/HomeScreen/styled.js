import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const CategoryArea = styled.div`
  color: #fff;
  margin-top: 20px;
`;

export const CategoryList = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ProductArea = styled.div`
  margin: 20px 0 20px 0;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const ProductPaginationArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 0;
  gap: 5px;
`;

export const ProductPaginationItem = styled.div`
  background-color: ${({ activePage, current }) =>
    activePage === current ? "#999" : "#fff"};
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
