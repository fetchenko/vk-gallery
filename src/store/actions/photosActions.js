import _ from 'lodash';

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

const findIndexForSize = (sizes, sizeType) => _.findIndex(sizes, size => size.type === sizeType);

export const photoItemsToGalleryPhotos = (items, sizeType) => {
  const galleryPhotos = [];
  items.forEach((item) => {
    const sizeIndex = findIndexForSize(item.sizes, sizeType);
    galleryPhotos.push({
      id: item.id,
      date: item.date,
      src: item.sizes[sizeIndex].url,
      thumbnail: item.sizes[sizeIndex].url,
      thumbnailWidth: item.sizes[sizeIndex].width,
      thumbnailHeight: item.sizes[sizeIndex].height,
    });
  });

  return galleryPhotos;
};

export const vkGetPhotos = (userId, accessToken) => (dispatch) => {
  dispatch(vkRequestPhotosAction());

  try {
    window.VK.Api.call('photos.getAll', {
      access_token: accessToken,
      v: actualVKAPIVersionForPhotos,
    }, (result) => {
      if (result) {
        const galleryPhotos = photoItemsToGalleryPhotos(result.response.items, 'x');
        dispatch(vkResponsePhotosSuccessAction(galleryPhotos));
      }
    });
  } catch (error) {
    dispatch(vkResponsePhotosFauilureAction(error));
  }
};
