import React, { useState, useEffect } from 'react';
//import './App.css';
import './auth/Authorize.css'
import GameIndex from './games/GameIndex';
import Authorize from './auth/Authorize';
import backgroundVid from "../src/images/videoplayback_Trim.mp4"

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  //LOG IN  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  //LOG OUT
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token')) ?
    <GameIndex token={sessionToken} clearToken={clearToken} /> :
    <Authorize updateToken={updateToken} token={sessionToken}/>
  }

    return (
      <div className="App">
      <video autoPlay loop muted id="backgroundVid"
      style={{
          position: "fixed",
          width: "100%",
          height: '100%',
          objectFit: "cover",
          right: 0,
          bottom: 0,
          zIndex: -1000,
      }}>
     <source src={backgroundVid} type="video/mp4" />
  </video>
      
        {protectedViews()}
      </div>
    );
  }



export default App;