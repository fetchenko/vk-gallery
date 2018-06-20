import React from 'react';
import { VK } from '../../../store/configureStore';

function Authorization() {
  VK.Widgets.Auth('vk_auth', { authUrl: '/dev/Login' });

  return (
    <div>
      <div id="vk_auth">vk auth</div>
      <button>login</button>
    </div>
  );
}

export default Authorization;
