import * as actions from '../../constants/actionsType';

const initialeState = {
  authed: false,
  userInfo: {},
  VK: {},
};

export default function authorizeReducer(state = initialeState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.AUTHORIZE_USER:
      return { ...state, authed: false, userInfo: {} };
    case actions.AUTHORIZE_USER_SUCCESS:
      return { ...state, authed: true, userInfo: payload };
    case actions.AUTHORIZE_USER_FAILURE:
      return { ...state, error: payload, userInfo: {} };
    case actions.INITIALIZE_OPEN_API:
      return { ...state, VK: payload };
    default:
      return state;
  }
}
