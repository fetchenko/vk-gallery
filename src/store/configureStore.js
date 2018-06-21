import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

import { initialiseOpenAPI } from '../store/actions/authorizationActions';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

store.dispatch(initialiseOpenAPI());

export default store;
