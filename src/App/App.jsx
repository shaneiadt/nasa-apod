import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import Images from '../Images/Images';

function App() {
  return (
    <>
      <Nav />
      {/* <Loader /> */}
      <Images />
      <Message />
    </>
  );
}

export default App;
