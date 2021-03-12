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
  const [view, setView] = useState('FEED');
  const api =
    'https://api.nasa.gov/planetary/apod?api_key=m5YApP4hrckiYPOPQxyYGiNfsLjtBn0k3g52bViv&count=10';

  useEffect(async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();

      if (localStorage.getItem('nasa-apod-favorites')) {
        setFavorites(JSON.parse(localStorage.getItem('nasa-apod-favorites')));
      }

      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addToFavorites = (item) => {
    const newFavorites = [...favorites];
    newFavorites.push(item);
    localStorage.setItem('nasa-apod-favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);

    setMessage('ADDED');

    const timeout = setTimeout(() => {
      setMessage(null);
      clearTimeout(timeout);
    }, 1000);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav view={view} setView={setView} />
          <Images
            images={view === 'FEED' ? data : favorites}
            addToFavorites={addToFavorites}
          />
          {message && <Message text={message} />}
        </>
      )}
    </>
  );
};
