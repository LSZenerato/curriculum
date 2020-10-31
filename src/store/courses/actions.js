import coursesConstants from './constants';

export const fetchCoursesRequest = () => {
  return {
    type: coursesConstants.FETCH_COURSES_REQUEST,
  };
};

export const fetchCoursesSuccess = (courses) => {
  return {
    type: coursesConstants.FETCH_COURSES_SUCCESS,
    payload: courses,
  };
};

export const fetchCoursesFailure = (error) => {
  return {
    type: coursesConstants.FETCH_COURSES_FAILURE,
    payload: error,
  };
};
