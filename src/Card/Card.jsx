import React from 'react';

import './Card.css';

export default () => (
  <div className="card">
    <a href="" title="View Full Image" target="_blank">
      <img className="card-img-top" src="https://apod.nasa.gov/apod/image/2103/PIA24487.jpg" alt="NASA Picture of the Day" />
    </a>
    <div className="card-body">
      <h5 className="card-title">Title of Image</h5>
      <p className="clickable">Add to Favorites</p>
      <p className="card-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, saepe
        laudantium. Recusandae exercitationem pariatur mollitia vitae quidem
        aperiam blanditiis reprehenderit, voluptatum sunt, accusantium ea
        eveniet voluptates. Iusto repudiandae officiis illo?
      </p>
      <small className="text-muted">
          <strong>12-12-2020</strong>
          <span>Copyright Info</span>
      </small>
    </div>
  </div>
);
