import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppEp';
import store from './easy-peasy/store'
import {StoreProvider} from 'easy-peasy'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

