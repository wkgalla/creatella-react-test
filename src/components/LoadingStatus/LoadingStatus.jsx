import React from "react";
import { Loader, Message } from 'semantic-ui-react'
import './LoadingStatus.css'

const LoadingStatus = ({ isFetching, noMoreProducts }) => {
  if(isFetching) {
    return (
      <div className="loader">
        <Loader active inline indeterminate>Loading More Products</Loader>
      </div>
    )
  }

  if(noMoreProducts) {
    return (
      <div className="loader">
        <Message compact>
          ~ end of catalogue ~
        </Message>
      </div>
    )
  }

  return null;
};

export default LoadingStatus;
