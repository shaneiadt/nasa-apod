import React from 'react';
import './Nav.css';

export default ({ view, setView }) => {
  return (
    <div className="container">
      <div className="navigation-container">
        <span className="background"></span>
        <span className="navigation-items" id="resultsNav">
          <h3
            className="clickable"
            onClick={() =>
              view === 'FEED' ? setView('FAVORITES') : setView('FEED')
            }
          >
            {view === 'FEED' ? 'Favorites' : 'Back to Feed'}
          </h3>
          <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
          <h3 className="clickable">Load More</h3>
        </span>
        <span className="navigation-items hidden" id="favoritesNav">
          <h3 className="clickable">Load More Nasa Images</h3>
        </span>
      </div>
    </div>
  );
};
