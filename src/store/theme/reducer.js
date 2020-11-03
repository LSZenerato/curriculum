import themeConstants from './constants';

const initialState = {
  light: false
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case themeConstants.CHANGE_THEME_LIGHT:
      return {
        light: action.value
      };
    default:
      return state;
  }
};

export default theme;
