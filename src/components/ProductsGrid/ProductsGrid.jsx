import React from "react";
import ProductCard from '../../containers/ProductCard'
import AdCard from '../../containers/AdCard'
import { Grid } from 'semantic-ui-react'

const ProductsGrid = ({ products }) => {
  return (
    <Grid doubling columns={4}>
      {products.map((item, index) => {
        return (
          [
            <Grid.Column key={item.id}>
              <ProductCard index={index}/>
            </Grid.Column>,
            <AdCard key={index} itemIndex={index}/>
          ]
        )
      })}
    </Grid>
  );
};

export default ProductsGrid;
