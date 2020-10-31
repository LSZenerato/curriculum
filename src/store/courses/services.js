import { NodeServer } from 'src/services';
import {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} from './actions';

export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch(fetchCoursesRequest());
    NodeServer.brand = 'pitagoras';
    const response = await NodeServer.getCourses();
    if (response.status === 200) {
      dispatch(fetchCoursesSuccess(response.data));
    } else {
      dispatch(fetchCoursesFailure(error.message));
    }
  };
};
