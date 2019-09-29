import React from "react";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductCardContainer = ({item}) => {
  return <ProductCard  item={item}/>;
};

const mapStateToProps = ({ products }, props) => {
  return {
    item: products[props.index]
  };
}

export default connect(mapStateToProps)(ProductCardContainer);
