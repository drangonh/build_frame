import 'antd/dist/antd.css';
import React from 'react';
import { render } from 'react-dom';
import './i18n/configs';
import Root from './redux/react-redux-second';
import './styles/index.less';

render(
  <Root />
  , document.getElementById('vite-root'));