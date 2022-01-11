import React from 'react';
import { Container, CategoryImage } from './styled';

function CategoryItem({data, active}) {
    const {id, title, image} = data;
    return (
        <Container active={active} id={id}>
           <CategoryImage src={image}/> 
        </Container>
    );
}

export default CategoryItem;