import {useSelector as useReduxSelector,TypedUseSelectorHook} from 'react-redux'
import { RootState } from './react-redux-first/store'

export const useSelector:TypedUseSelectorHook<RootState>=useReduxSelector;