import {
  CHANGE_LANGUAGE,
  ADD_LANGUAGE,
  LanguageActionType,
} from './languageAction';

interface LanguageType {
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
      return {};
    default:
      return state;
  }
};
