import React from 'react';

import './Card.css';

export default ({ data, addToFavorites }) => {
  return (
    <div className="card">
      <a href="" title="View Full Image" target="_blank">
        <img className="card-img-top" src={data.hdurl} alt={data.title} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="clickable" onClick={() => addToFavorites(data)}>
          Add to Favorites
        </p>
        <p className="card-text">{data.explanation}</p>
        <small className="text-muted">
          <strong>{data.date}</strong>&nbsp;
          <span>Copyright Info</span>
        </small>
      </div>
    </div>
  );
};
