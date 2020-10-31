import coursesConstants from './constants';

const initialState = {
  loading: true,
  courses: ['1', '2'],
  error: '',
};

const courses = (state = initialState, action) => {
  switch (action.type) {
    case coursesConstants.FETCH_COURSES_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
        error: '',
      };
    case coursesConstants.FETCH_COURSES_FAILURE:
      return {
        loading: false,
        courses: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courses;
