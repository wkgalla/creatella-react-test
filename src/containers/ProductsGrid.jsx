import React, {useEffect} from "react";
import { connect } from "react-redux";
import { asyncFetchProducts } from '../actions/products'
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const ProductsGridContainer = props => {
  useEffect(() => {
    props.fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProductsGrid products={props.products} />;
};

const mapStateToProps = ({ products }) => {
  return {
    products: products
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(asyncFetchProducts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsGridContainer);
