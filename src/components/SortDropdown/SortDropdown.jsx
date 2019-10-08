import React from "react";
import { Dropdown, Menu } from 'semantic-ui-react'
import './SortDropdown.css'

const sortOptions = [
  {
    key: 'none',
    text: 'None',
    value: ''
  }, {
    key: 'price',
    text: 'Price',
    value: 'price'
  }, {
    key: 'size',
    text: 'Size',
    value: 'size'
  }, {
    key: 'id',
    text: 'Id',
    value: 'id'
  }
];

const SortDropdown = ({ changeSortOption, sortValue }) => {
  return (
    <div className="sort-dropdown-container">
      <Menu compact>
        <Dropdown
          className="sort-dropdown"
          simple
          item
          placeholder='Select sort option'
          value={sortValue}
          onChange={(e, {value}) => changeSortOption(value)}
          options={sortOptions} />
      </Menu>
    </div>
  )
};

export default SortDropdown;
