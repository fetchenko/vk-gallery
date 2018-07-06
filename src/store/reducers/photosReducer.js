import * as actions from '../../constants/photosActionTypes';

const initialeState = {
  items: [],
};

export default function photosReducer(state = initialeState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.REQUEST_PHOTOS:
      return { ...state, items: [] };
    case actions.RESPONSE_PHOTOS_SUCCESS:
      return { ...state, items: payload };
    case actions.RESPONSE_PHOTOS_FAILURE:
      return { ...state, items: [] };

    default:
      return state;
  }
}
