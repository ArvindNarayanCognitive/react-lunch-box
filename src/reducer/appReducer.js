import * as types from '../constants';

const initState = {
  lang: 'EN'
};

const app = (state = initState, action) => {
  switch (action.type) {
    case types.SELECT_LANG_EN:
      return {
        ...state,
        lang: 'EN'
      };

    case types.SELECT_LANG_TH:
      return {
        ...state,
        lang: 'TH'
      };

    default:
      return state
  }
}

export default app;