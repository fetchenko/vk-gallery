import { combineReducers } from 'redux';

import authorizationReducer from './authorizationReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authorizationReducer,
  user: userReducer,
});

export default rootReducer;
