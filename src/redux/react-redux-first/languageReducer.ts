import {
  ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionType
} from './languageAction';

export interface LanguageType {
  language: string;
  languageList: { name: string; code: string }[];
}

const defaultLanguage: LanguageType = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
};

export default (state = defaultLanguage, action: LanguageActionType) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList:[...state.languageList,action.payload]
      };
    default:
      return state;
  }
};
