import React from "react";
import "./Navbar.scss";
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div className="App-container">
      <nav className="Navbar">
        <ul>
          <li className="Navbar-item logo">
            <Link to="/"><span className="blue">Blue</span> Note Bin</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="Navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="Navbar-item">
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar;