import React from "react";
import './Cart.scss';
import CartItem from "../CartItem/CartItem";

function Cart(props) {

  const { toggleCart, cart, addItem, deleteItem } = props;

  function clickHandlerCheckout(e) {
    e.preventDefault();
    alert("Thanks for visiting this fake store");
  }

  function close(e) {
    e.preventDefault();
    toggleCart();
  }

  const total = Object.keys(cart).reduce((prevTotal, albumTitle) => {
    return (cart[albumTitle].cost * cart[albumTitle].quantity) + prevTotal;
  }, 0.00);

  return (
    <div className="Cart">
      <div className="overlay" onClick={toggleCart}></div>
      <form className="Cart-sidebar">
        <button className="Cart-sidebar-close" onClick={close}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
          </svg>
        </button>
        <h2>Your Shopping Cart</h2>
        <ul className="Cart-sidebar-list">
          {Object.keys(cart).map(albumTitle => (
            <li>
              <CartItem album={cart[albumTitle]} key={albumTitle} addItem={addItem} deleteItem={deleteItem} />
            </li>
          ))}
        </ul>
        <output className="Cart-sidebar-total">{`Total: $${total === 0 ? '0.00' : total.toFixed(2)}`}</output>
        <button className="Cart-sidebar-checkout" onClick={clickHandlerCheckout}>Checkout</button>
      </form>

    </div>
  )
}

export default Cart;