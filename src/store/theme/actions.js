import themeConstants from './constants';

export const changeThemeLight = (value) => {
  return {
    type: themeConstants.CHANGE_THEME_LIGHT,
    value: value
  };
};
