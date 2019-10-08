import React from "react";
import { connect } from "react-redux";
import {changeSortOption} from '../actions/products'
import SortDropdown from "../components/SortDropdown/SortDropdown";

const SortDropdownContainer = ({sortValue, changeSortOption}) => {
  return <SortDropdown sortValue={sortValue} changeSortOption={changeSortOption}/>;
};

const mapStateToProps = ({ sortValue }) => {
  return {
    sortValue: sortValue,
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
      changeSortOption: (value) => dispatch(changeSortOption(value)),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(SortDropdownContainer);
