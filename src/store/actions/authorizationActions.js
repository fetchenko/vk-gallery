import * as actions from '../../constants/authorizationActionTypes';
import { scope } from '../../constants/vkSettings';

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

export const vkLoginAsync = () => (dispatch) => {
  const onLogin = (response) => {
    if (response) {
      const { session } = response;
      dispatch(vkAuthorizeUserSuccessAction(session));
    } else {
      dispatch(vkAuthorizeUserFailureAction(new Error('result is empty')));
    }
  };

  window.VK.Auth.login(onLogin, scope);
};

export const vkAuthorizeUser = () => (dispatch) => {
  dispatch(vkAuthorizeUserAction());
  dispatch(vkLoginAsync());
};
