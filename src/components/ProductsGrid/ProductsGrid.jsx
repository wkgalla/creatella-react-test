import React from "react";
import ProductCard from '../../containers/ProductCard'
import { Grid } from 'semantic-ui-react'

const ProductsGrid = ({ products }) => {
  return (
    <Grid doubling columns={4}>
      {products.map((item, index) => (
        <Grid.Column key={item.id}>
          <ProductCard index={index}/>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
