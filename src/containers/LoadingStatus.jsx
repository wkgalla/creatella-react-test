import React from "react";
import { connect } from "react-redux";
import LoadingStatus from "../components/LoadingStatus/LoadingStatus";

const LoadingStatusContainer = ({isFetching, noMoreProducts}) => {
  return <LoadingStatus  isFetching={isFetching} noMoreProducts={noMoreProducts}/>;
};

const mapStateToProps = ({ isFetching, noMoreProducts }) => {
  return {
    isFetching: isFetching,
    noMoreProducts: noMoreProducts
  };
}

export default connect(mapStateToProps)(LoadingStatusContainer);
