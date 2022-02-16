import React from 'react';
import './Shop.scss';
import albums from '../../data/albums';
import Item from '../Item/Item';

function Shop(props) {
  return (
    <div className="Shop">
      {albums.map((album) => (
        <Item
          album={album}
          key={album.title}
          addItem={props.addItem}
        />
      ))}
    </div>
  )
}

export default Shop;