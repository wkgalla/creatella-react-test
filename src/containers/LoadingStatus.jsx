import React from "react";
import { connect } from "react-redux";
import LoadingStatus from "../components/LoadingStatus/LoadingStatus";

const LoadingStatusContainer = ({isFetching}) => {
  return <LoadingStatus  isFetching={isFetching}/>;
};

const mapStateToProps = ({ isFetching }) => {
  return {
    isFetching: isFetching
  };
}

export default connect(mapStateToProps)(LoadingStatusContainer);
