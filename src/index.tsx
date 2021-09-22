import { render } from 'react-dom';
import React from 'react'
import { PageRouter } from './router';
import './styles/index.less';
import './i18n/configs'

render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
  , document.getElementById('vite-root'));
