import * as actions from '../../constants/vkAPIActionTypes';
import vkAppId from '../../config/vkAppId';

const initializeVKAPIAction = vkAPI => ({
  type: actions.INITIALIZE_VK_API,
  payload: vkAPI,
});

const initializeVKAPI = () => (dispatch) => {
  window.VK.init({ apiId: vkAppId });

  // open api object will save state as store.auth.VK
  dispatch(initializeVKAPIAction(window.VK));
};

export default initializeVKAPI;
