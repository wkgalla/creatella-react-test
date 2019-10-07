import React from "react";
import { Card, Image } from 'semantic-ui-react';
import './AdCard.css'

const AdCard = ({r}) => {
  return (
    <Card className="ad-card">
      <Image className="ad-image" src={`/api/ads/?r=${r}`}/>
    </Card>
  );
};

export default AdCard;
