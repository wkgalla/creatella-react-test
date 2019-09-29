import React from "react";
import { Card, Divider } from 'semantic-ui-react';
import './style.css'

const ProductCard = ({item}) => {
  return (
    <Card>
    <Card.Content>
      <div className="item-face" style={{fontSize: item.size}}>
        <Card.Header>{item.face}</Card.Header>
      </div>
      <Divider/>
      <Card.Meta>
        <span className='date'>{(new Date(item.date)).toUTCString()}</span>
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
