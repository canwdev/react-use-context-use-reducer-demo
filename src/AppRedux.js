import React, {useState} from 'react';
import './App.css';
import Login from './components/User/Login'
import Profile from './components/User/Profile'
import ChangeColor from './components/ChangeColor'

function App() {
  return (
    <div>

      <Login></Login>
      <Profile></Profile>
      <ChangeColor></ChangeColor>
    </div>

  );
}

export default App;
