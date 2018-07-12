import * as actions from '../../constants/authorizationActionTypes';
import { scope } from '../../constants/vkSettings';

const vkAuthorizeAction = () => ({
  type: actions.AUTHORIZE_USER,
});

const vkAuthorizeSuccessAction = user => ({
  type: actions.AUTHORIZE_USER_SUCCESS,
  payload: user,
});

const vkAuthorizeFailureAction = error => ({
  type: actions.AUTHORIZE_USER_FAILURE,
  payload: error,
});

const clearAuthData = () => ({
  type: actions.CLEAR_AUTH_DATA,
});

export const vkLogout = () => (dispatch) => {
  window.VK.Auth.logout((response) => {
    if (!response.session) {
      dispatch(clearAuthData());
    }
  });
};

export const vkLogin = () => (dispatch) => {
  const onLogin = response =>
    (response
      ? dispatch(vkAuthorizeSuccessAction(response.session))
      : dispatch(vkAuthorizeFailureAction(new Error('result is empty'))));

  window.VK.Auth.login(onLogin, scope);
};

export const vkAuthorize = () => (dispatch) => {
  dispatch(vkAuthorizeAction());
  dispatch(vkLogin());
};
