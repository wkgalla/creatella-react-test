import React from "react";
import AdCard from "../components/AdCard/AdCard";
import { Grid } from 'semantic-ui-react'

const ADS_CARD_INTERVAL = 20;
const rList = [];
const AdCardContainer = ({itemIndex}) => {
  if( (itemIndex+1) % ADS_CARD_INTERVAL !== 0) {
    return null;
  }

  const rIndex = (itemIndex + 1) / ADS_CARD_INTERVAL - 1;
  if(rIndex === rList.length) {
    let r = Math.floor(Math.random() * 10);
    if(r === rList[rList.length - 1]) {
      r = r + 1;
    }
    rList.push(r);
  }
  
  return (
    <Grid.Column>
      <AdCard r={rList[rIndex]}/>
    </Grid.Column>
  )
};

export default AdCardContainer