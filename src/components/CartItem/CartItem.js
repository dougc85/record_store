import React from 'react';
import './CartItem.scss';

function CartItem(props) {

  const { album, addItem, deleteItem } = props;
  const { title, artist, cost, art, quantity } = album;

  function handleAdd(e) {
    addItem(album);
  }

  function handleDelete() {
    deleteItem(album);
  }
  return (
    <div className="CartItem">
      <img src={art} alt={title} className="CartItem-art" />
      <div className="CartItem-title">{title}</div>
      <div className="CartItem-artist">{artist}</div>
      <div className="CartItem-cost">{(cost * quantity).toFixed(2)}</div>
      <div className="CartItem-quantity">
        <svg onClick={handleDelete} className="CartItem-quantity-subtract change-quantity" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
        </svg>
        {quantity}
        <svg onClick={handleAdd} className="CartItem-quantity-add change-quantity" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
        </svg>
      </div>
    </div>
  )
}

export default CartItem;