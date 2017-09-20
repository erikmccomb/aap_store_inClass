// Main app. this is the only component mounted on pageXOffset. 
// it has children that create teh experience

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter } from 'react-router-dom';
import {provider} from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  document.detElementById('root')
);
registerServiceWorker();
