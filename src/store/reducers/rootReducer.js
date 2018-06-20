import { combineReducers } from 'redux';

import authorizationReducer from './authorizationReducer';

const rootReducer = combineReducers({
  authorizationReducer,
});

export default rootReducer;
