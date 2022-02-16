import React from "react";
import './Cart.scss';

function Cart(props) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={props.toggleCart}></div>
      <div className="Cart-sidebar"></div>
    </div>
  )
}

export default Cart;