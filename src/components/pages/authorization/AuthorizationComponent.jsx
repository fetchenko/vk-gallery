import React from 'react';
import { VK } from '../../../store/configureStore';

function Authorization() {
  VK.Widgets.Auth('vk_auth', { authUrl: '/dev/Login' });

  return (
    <div id="vk_auth"></div>
  );
}

export default Authorization;
