import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../regions/navbar';
import Authorization from '../pages/authorization';
import store from '../../store/configureStore';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider>
          <Navbar />
          <Authorization />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
