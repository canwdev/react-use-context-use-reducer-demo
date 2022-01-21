import React, {useState, useReducer} from 'react';
import './App.css';
import BoxA from "./components/BoxA";
import BoxB from "./components/BoxB";
import BoxC from "./components/BoxC";
import MyContext, {reducers, initialState} from './store'

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);


  return (
    <MyContext.Provider value={{state, dispatch}}>
      <div className="App">
        <BoxA />
        <BoxB />

        <hr/>

        <BoxC />
      </div>
    </MyContext.Provider>

  );
}

export default App;
