import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './web/App';
import './index.scss';
import './i18n/config';
// import reportWebVitals from './reportWebVitals';

import configureStore from './core/redux/store';
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
