import React from 'react';

import Card from '../Card/Card';

import './Images.css';

export default ({
  images = [],
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  return (
    images.length > 0 && (
      <div className="images-container">
        {images.map((image, i) => (
          <Card
            key={i}
            data={image}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    )
  );
};
