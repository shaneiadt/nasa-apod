import React from 'react';
import './Message.css';

export default ({ text = 'ADDED!' }) => (
  <div className="save-confirmed">
    <h1>{text}</h1>
  </div>
);
