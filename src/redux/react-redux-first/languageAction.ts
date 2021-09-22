export const CHANGE_LANGUAGE = 'change_language';
export const ADD_LANGUAGE = 'add_language';

interface ChangeLanguageAction {
  type: string;
  payload: string;
}

interface AddLanguageAction {
  type: string;
  payload: {
    name: string;
    code: string;
  };
}

export type LanguageActionType = ChangeLanguageAction | AddLanguageAction;

export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: {
      name,
      code,
    },
  };
};

export const ChangeLanguageActionCreator = (
  payload: string
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload,
  };
};
