import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import vkApiId from '../config/vkApiId';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

const { VK } = window;

VK.init({
  apiId: vkApiId,
});

export { store, VK };
