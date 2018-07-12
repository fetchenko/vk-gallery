import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../regions/navbar';
import Router from '../../components/routes';
import store from '../../store/configureStore';
// import theme from '../../styles/theme';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider>
          <Navbar />
          <Router />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
