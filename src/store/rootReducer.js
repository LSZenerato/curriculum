import { combineReducers } from 'redux';
import courses from './courses/reducer';
import theme from './theme/reducer';

export default combineReducers({
  courses,
  theme
});
