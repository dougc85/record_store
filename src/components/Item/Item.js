import React from 'react';
import './Item.scss';

function Item(props) {
  return (
    <div className="Item">
      <div className="Item-art-container">
        <img className="Item-art" src={props.art} alt={props.title} />
      </div>
      <p>
        <span className="Item-title">{props.title}</span>
        <span className="Item-artist">{props.artist}</span>
        <span className="Item-cost">{props.cost}</span>
      </p>

    </div>
  )
}

export default Item;