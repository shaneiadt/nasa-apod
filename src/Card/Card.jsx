import React from 'react';
import './Card.css';

export default ({ data, addToFavorites, removeFromFavorites, isFavorite }) => {
  return (
    <div className="card">
      <a href="" title="View Full Image" target="_blank">
        <img className="card-img-top" src={data.url} alt={data.title} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p
          className="clickable"
          onClick={() =>
            !isFavorite(data) ? addToFavorites(data) : removeFromFavorites(data)
          }
        >
          {!isFavorite(data) ? 'Add to Favorites' : 'Remove from Favorites'}
        </p>
        <p className="card-text">{data.explanation}</p>
        <small className="text-muted">
          <strong>{data.date}</strong>&nbsp;
          {data.copyright && <span>Copyright Info {data.copyright}</span>}
        </small>
      </div>
    </div>
  );
};
