import React, { useState, useEffect } from 'react';
//import './App.css';
import './auth/Authorize.css'
import GameIndex from './games/GameIndex';
import Authorize from './auth/Authorize';

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

  // //LOG OUT
  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token')) ?
    <GameIndex token={sessionToken} /> :
    <Authorize updateToken={updateToken} token={sessionToken}/>
  }

    return (
      <div className="App">

        {/* <Authorize clearToken={clearToken}/> */}
        {protectedViews()}
      </div>
    );
  }



export default App;