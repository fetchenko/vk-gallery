import { combineReducers } from 'redux';

import vkAPIReducer from './vkAPIReducer';
import authorizationReducer from './authorizationReducer';
import userReducer from './userReducer';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
  auth: authorizationReducer,
  user: userReducer,
  photos: photosReducer,
  VK: vkAPIReducer,
});

export default rootReducer;
