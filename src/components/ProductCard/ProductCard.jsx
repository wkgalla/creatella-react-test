import React from "react";
import { Card, Divider } from 'semantic-ui-react';
import './ProductCard.css'

const formatDate = (date) => {
  const currentDate = new Date();
  const itemDate = new Date(date);

  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  
  const diff = (currentDate - itemDate);

  if(diff < oneMinute) {
    return `${Math.round(diff/1000)} seconds ago`
  } else if (diff < oneHour) {
    return `${Math.round(diff/oneMinute)} minutes ago`
  } else if (diff < oneDay) {
    return `${Math.round(diff/oneHour)} hours ago`
  } else if (diff < oneWeek) {
    return `${Math.round(diff/oneDay)} days ago`
  } else {
    return itemDate.toLocaleString('en-US', {dateStyle: 'short', timeStyle: 'short'})
  }
}

const ProductCard = ({item}) => {
  return (
    <Card>
    <Card.Content>
      <div className="item-face" style={{fontSize: item.size}}>
        <Card.Header>{item.face}</Card.Header>
      </div>
      <Divider/>
      <Card.Meta>
        <span className='date'>{formatDate(item.date)}</span>
      </Card.Meta>
      <Card.Description className="item-description">
        Size {item.size} <span className="item-price">${item.price}</span>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {item.id}
    </Card.Content>
  </Card>
  );
};

export default ProductCard;
