import * as actions from '../../constants/authorizationActionTypes';

const initialeState = {
  authed: false,
  session: {},
};

export default function authorizeReducer(state = initialeState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.AUTHORIZE_USER:
      return { ...state, authed: false, session: {} };
    case actions.AUTHORIZE_USER_SUCCESS:
      return { ...state, authed: true, session: payload };
    case actions.AUTHORIZE_USER_FAILURE:
      return { ...state, error: payload, session: {} };
    case actions.CLEAR_AUTH_DATA:
      return initialeState;
    default:
      return state;
  }
}
