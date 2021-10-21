import React from 'react';
import axios from "axios";
import { Provider } from 'react-redux';
import '../../i18n/configs';
import { PageRouter } from '@/router';
import '../../styles/index.less';
import store from './store';

axios.defaults.headers.common['x-icode'] = 'E8D41EB9E06C66EB';

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