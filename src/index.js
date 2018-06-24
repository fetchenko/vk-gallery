import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';

import './index.css';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
