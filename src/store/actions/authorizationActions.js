import * as actions from '../../constants/authorizeActionsType';
import vkApiId from '../../config/vkApiId';

const vkAuthorizeUserAction = () => ({
  type: actions.AUTHORIZE_USER,
});

const vkAuthorizeUserSuccessAction = user => ({
  type: actions.AUTHORIZE_USER_SUCCESS,
  payload: user,
});

const vkAuthorizeUserFailureAction = error => ({
  type: actions.AUTHORIZE_USER_FAILURE,
  payload: error,
});

const initialiseVKAPIAction = vkAPI => ({
  type: actions.INITIALIZE_VK_API,
  payload: vkAPI,
});

const clearAuthData = () => ({
  type: actions.CLEAR_AUTH_DATA,
});

export const initialiseVKAPI = () => (dispatch) => {
  window.VK.init({ apiId: vkApiId });

  // open api object will save state as store.auth.VK
  dispatch(initialiseVKAPIAction(window.VK));
};

export const vkLogout = () => (dispatch) => {
  window.VK.Auth.logout((response) => {
    if (!response.session) {
      dispatch(clearAuthData());
    }
  });
};

export const vkLoginAsync = () => (dispatch) => {
  window.VK.Auth.login((response) => {
    if (response) {
      const { session } = response;
      dispatch(vkAuthorizeUserSuccessAction(session));
    } else {
      dispatch(vkAuthorizeUserFailureAction(new Error('result is empty')));
    }
  });
};

export const vkLogin = () => new Promise((resolve, reject) => {
  let result;

  window.VK.Auth.login((response) => {
    result = response;
  });

  if (result) {
    resolve(result);
  } else {
    reject(new Error('no result'));
  }
});

export const vkAuthorizeUser = () => (dispatch) => {
  initialiseVKAPI();
  dispatch(vkAuthorizeUserAction());
  dispatch(vkLoginAsync());
  /* try {
    vkLogin()
      .then((response) => {
        console.log(response);
        dispatch(vkAuthorizeUserSuccessAction(response));
      })
      .catch(error => dispatch(vkAuthorizeUserFailureAction(error)));
  } catch (error) {
    dispatch(vkAuthorizeUserFailureAction(error));
  } */
};
