import {
  ADD_NOMINEE,
  ADD_NOMINEES_FROM_LS,
  REMOVE_NOMINEE,
  FINISHED_NOMINATING,
  GET_RESULTS,
  SEARCH_ERROR,
} from './types';

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOMINEE:
      return {
        ...state,
        nominees: [action.payload, ...state.nominees],
      };
    case ADD_NOMINEES_FROM_LS:
      return {
        ...state,
        nominees: action.payload,
        finishedNominating: action.payload.length >= 5,
      };
    case REMOVE_NOMINEE:
      return {
        ...state,
        nominees: state.nominees.filter(
          (nominee) => nominee.imdbID !== action.payload
        ),
        finishedNominating: false,
      };
    case GET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: true,
      };
    case FINISHED_NOMINATING:
      return {
        ...state,
        finishedNominating: true,
      };
    default:
      return state;
  }
};

export default appReducer;
