import React, {useEffect} from "react";
import { connect } from "react-redux";
import { moveFetchedProductsToList, asyncFetchProducts, loadProducts } from '../actions/products'
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const ProductsGridContainer = props => {
  const {isFetching, loadMore, products, loadProducts, moveFetchedProducts, fetchProducts} = props;
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
        if (!loadMore) {
          loadProducts();
        }
      }
    }

    if(!isFetching && loadMore) {
      moveFetchedProducts();
    }

    window.addEventListener("scroll", handleScroll, true);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isFetching, loadMore, loadProducts, moveFetchedProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if(products.length === 0 && !isFetching ) {
      moveFetchedProducts();
    }
  }, [products, isFetching, moveFetchedProducts])

  return <ProductsGrid products={products} />;
};

const mapStateToProps = ({ products, isFetching, loadMoreProducts }) => {
  return {
    products: products,
    isFetching: isFetching,
    loadMore: loadMoreProducts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveFetchedProducts: () => dispatch(moveFetchedProductsToList()),
    fetchProducts: () => dispatch(asyncFetchProducts()),
    loadProducts: () => dispatch(loadProducts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsGridContainer);
