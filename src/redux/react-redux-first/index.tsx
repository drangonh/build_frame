import React from 'react';
import { Provider } from 'react-redux';
import '../../i18n/configs';
import { PageRouter } from '../../router';
import '../../styles/index.less';
import store from './store';

const View = () => {
  return (
    <React.StrictMode>
      <Provider store={store} >
        <PageRouter />
      </Provider>
    </React.StrictMode>
  )
}

export default View