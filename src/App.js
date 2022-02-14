import React from 'react';
import Todo from './components/Todo'
import Todo2 from './components/Todo2'
import './App.css';
import {myTimer} from './store'


function App() {
  return (
      <div className="App">
        <Todo timer={myTimer} />
        <Todo2 timer={myTimer} />
      </div>

  );
}

export default App;
