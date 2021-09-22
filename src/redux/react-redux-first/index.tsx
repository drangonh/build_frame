import { render } from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux'
import { PageRouter } from '../../router';
import './styles/index.less';
import './i18n/configs'
import {store} from './store'

render(
  <React.StrictMode>
    <Provider store={store} >
      <PageRouter />
    </Provider>
  </React.StrictMode>
  , document.getElementById('vite-root'));
