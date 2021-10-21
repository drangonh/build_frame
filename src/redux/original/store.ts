import { createStore, combineReducers } from 'redux';
import language from './languageReducer';

const reducers = combineReducers(language);
const store = createStore(reducers);

export { store };

// 原声redux读取数据
// store.getState()

// 