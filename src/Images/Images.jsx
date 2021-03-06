import React from 'react';

import Card from '../Card/Card';

import './Images.css';

export default ({ images = [], addToFavorites }) =>
  images.length > 0 && (
    <div className="images-container">
      {images.map((image) => (
        <Card key={image.url} data={image} addToFavorites={addToFavorites} />
      ))}
    </div>
  );
