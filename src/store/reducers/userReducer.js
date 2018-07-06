import * as actions from '../../constants/userActionTypes';

const initialeState = {
};

export default function userReducer(state = initialeState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.GET_SMALL_AVATAR:
      return { ...state, photo: payload };

    default:
      return state;
  }
}
