import React, {useEffect} from "react";
import { connect } from "react-redux";
import { asyncFetchProducts } from '../actions/products'
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const ProductsGridContainer = props => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    props.fetchProducts();

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll () {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
      props.fetchProducts();
    }
  }

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
