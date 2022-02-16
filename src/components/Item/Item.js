import React from 'react';
import './Item.scss';

function Item(props) {

  const { title, artist, cost, art } = props.album;

  function handleClick(e) {
    props.addItem(props.album);
  }

  return (
    <div className="Item">
      <div className="Item-art-container">
        <img className="Item-art" src={art} alt={props.title} />
      </div>
      <p>
        <span className="Item-title">{title}</span>
        <span className="Item-artist">{artist}</span>
        <span className="Item-cost">{cost}</span>
      </p>
      <button className="Item-add" onClick={handleClick} >Add to Cart</button>

    </div>
  )
}

export default Item;