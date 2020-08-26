import React, { useState, useEffect } from 'react';
//import './App.css';
import './auth/Authorize.css'

import Authorize from './auth/Authorize';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
  return (
    <div className="App">

      <Authorize />


    </div>
  );
}



export default App;
