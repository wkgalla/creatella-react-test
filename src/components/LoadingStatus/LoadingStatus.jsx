import React from "react";
import { Loader } from 'semantic-ui-react'
import './LoadingStatus.css'

const LoadingStatus = ({ isFetching }) => {
  return (
      isFetching && (
          <div className="loader">
            <Loader active inline indeterminate>Loading More Products</Loader>
          </div>
      )
  )
};

export default LoadingStatus;
