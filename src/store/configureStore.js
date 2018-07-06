import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

import initializeVKAPI from '../store/actions/vkAPIActions';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

store.dispatch(initializeVKAPI());

export default store;
