import * as actions from '../../constants/vkAPIActionTypes';

const initialeState = {
};

export default function authorizeReducer(state = initialeState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.INITIALIZE_VK_API:
      return { ...state, ...payload };
    default:
      return state;
  }
}

