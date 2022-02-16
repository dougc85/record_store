import React from 'react';
import './Shop.scss';
import albums from '../../data/albums';
import Item from '../Item/Item';

function Shop() {
  return (
    <div className="Shop">
      {albums.map((album) => (
        <Item
          title={album.title}
          artist={album.artist}
          cost={album.cost}
          art={album.art}
        />
      ))}
    </div>
  )
}

export default Shop;