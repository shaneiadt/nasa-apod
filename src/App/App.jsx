import React, { useEffect, useState } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import Images from '../Images/Images';

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const api =
    'https://api.nasa.gov/planetary/apod?api_key=m5YApP4hrckiYPOPQxyYGiNfsLjtBn0k3g52bViv';

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((content) => {
        setData([content]);
        setLoading(false);
      });
  }, []);

  const addToFavorites = (item) => {
    const newFavorites = [...favorites];
    newFavorites.push(item);
    setFavorites(newFavorites);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Images images={data} addToFavorites={addToFavorites} />
          {message && <Message text={message} />}
        </>
      )}
    </>
  );
};
