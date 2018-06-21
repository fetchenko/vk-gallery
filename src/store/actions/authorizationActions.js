import * as actions from '../../constants/actionsType';
import vkApiId from '../../config/vkApiId';

const { VK } = window;

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

const initialiseOpenAPIAction = openAPI => ({
  type: actions.INITIALIZE_OPEN_API,
  payload: openAPI,
});

export const initialiseOpenAPI = () => (dispatch) => {
  VK.init({ apiId: vkApiId });

  // open api object will store.auth.VK
  dispatch(initialiseOpenAPIAction(VK));
};

export const vkLogin = () => {
  const result = [];

  VK.Auth.login((response) => {
    console.log(response);
  });

  console.log(result);
  return result[0];
};

export const vkAuthorizeUser = () => (dispatch) => {
  initialiseOpenAPI();
  dispatch(vkAuthorizeUserAction());
  const responceStatus = vkLogin();

  switch (responceStatus) {
    case 'connected':
      dispatch(vkAuthorizeUserSuccessAction());
      break;

    case 'not_authorized':
      dispatch(vkAuthorizeUserFailureAction());
      break;

    case 'unknown':
      dispatch(vkAuthorizeUserFailureAction());
      break;

    default:
      dispatch(vkAuthorizeUserFailureAction());
      break;
  }
};
