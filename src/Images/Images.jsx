import React from 'react';

import Card from '../Card/Card';

import './Images.css';

export default ({ images = [], addToFavorites }) => { 
  return (
    images.length > 0 && (
      <div className="images-container">
        {images[0].map((image, i) => (
          <Card key={i} data={image} addToFavorites={addToFavorites} />
        ))}
      </div>
    )
  );
};
