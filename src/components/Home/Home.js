import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1 className="Home-title"><span className="Home-title-top"><span className="blue">Blue</span> Note Bin</span>A jazz record store</h1>
      <Link to="/shop">Visit the Shop</Link>
    </div>
  )
}

export default Home;