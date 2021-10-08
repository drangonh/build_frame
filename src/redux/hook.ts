import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
// 这里要注意替换,因为在不同的store.ts中RootState是不一样的
import { RootState } from './react-redux-second/store';

export const useSelector:TypedUseSelectorHook<RootState>=useReduxSelector;