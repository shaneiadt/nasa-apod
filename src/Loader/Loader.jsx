import React from 'react';
import loader from '../assets/rocket.svg';
import './Loader.css';

export default () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};
