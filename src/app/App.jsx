import React from 'react';
import { Provider } from 'react-redux';

import Authorization from '../components/pages/authorization';
import store from '../store/configureStore';

import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Authorization />
      </Provider>
    </div>
  );
}

export default App;
