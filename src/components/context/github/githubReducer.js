import {
  GET_USER,
  CLEAR_USERS,
  SEARCH_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_REPOS:
      return { ...state, loading: false, repos: action.payload };
    default:
      return state;
  }
};
