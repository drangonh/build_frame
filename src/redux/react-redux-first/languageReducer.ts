import i18n from 'i18next';
import {
  ADD_LANGUAGE,
  CHANGE_LANGUAGE,
  LanguageActionType
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
      i18n.changeLanguage(action.payload).then(e=>{

      }).catch(e=>{
        
      }); // 这样处理是不标准的，有副作用
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};
