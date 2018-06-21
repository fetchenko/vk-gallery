import { combineReducers } from 'redux';

import authorizationReducer from './authorizationReducer';

const rootReducer = combineReducers({
  auth: authorizationReducer,
});

export default rootReducer;
