import * as actions from '../../constants/userActionsType';
import { versionVKAPI } from '../../constants/vk-constants';

const vkGetSmallAvatarAction = photo => ({
  type: actions.GET_SMALL_AVATAR,
  payload: photo,
});

export const vkGetSmallAvatar = (userId, accessToken) => (dispatch) => {
  window.VK.Api.call('users.get', {
    user_ids: userId,
    access_token: accessToken,
    fields: 'photo_50',
    v: versionVKAPI,
  }, (result) => {
    if (result.response) {
      const photo = result.response[0].photo_50;
      dispatch(vkGetSmallAvatarAction(photo));
    }
  });
};

export const a = 'a';
