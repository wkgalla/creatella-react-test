import React, { useState } from "react";
import { Card, Image, Loader } from 'semantic-ui-react';
import './AdCard.css'

const AdCard = ({r}) => {
  const [isLoading, setLoadingState] = useState(true);
  return (
    <Card className="ad-card">
      <Image onLoad={() => setLoadingState(false)} className="ad-image" src={`/api/ads/?r=${r}`}/>
      {isLoading && (
          <Loader active indeterminate/>
      )}
    </Card>
  );
};

export default AdCard;
