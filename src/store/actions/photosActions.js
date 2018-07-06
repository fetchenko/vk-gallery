import * as actions from '../../constants/photosActionTypes';
import { actualVKAPIVersionForPhotos } from '../../constants/vkSettings';

const vkRequestPhotosAction = () => ({
  type: actions.REQUEST_PHOTOS,
});

const vkResponsePhotosSuccessAction = photos => ({
  type: actions.RESPONSE_PHOTOS_SUCCESS,
  payload: photos,
});

const vkResponsePhotosFauilureAction = error => ({
  type: actions.RESPONSE_PHOTOS_FAILURE,
  payload: error,
});

export const photoItemsToGalleryPhoto = (items) => {
  const galleryPhotos = [];
  items.forEach(item => galleryPhotos.push({
    id: item.id,
    src: item.sizes[3].url,
    thumbnail: item.sizes[3].url,
    thumbnailWidth: item.sizes[3].width,
    thumbnailHeight: item.sizes[3].height,
  }));

  return galleryPhotos;
};

export const vkGetPhotos = (userId, accessToken) => (dispatch) => {
  dispatch(vkRequestPhotosAction());

  try {
    window.VK.Api.call('photos.getAll', {
      access_token: accessToken,
      v: actualVKAPIVersionForPhotos,
    }, (result) => {
      const { response } = result;
      if (response) {
        const galleryPhotos = photoItemsToGalleryPhoto(response.items);
        dispatch(vkResponsePhotosSuccessAction(galleryPhotos));
      }
    });
  } catch (error) {
    dispatch(vkResponsePhotosFauilureAction(error));
  }
};
