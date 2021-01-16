import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import appReducer from './appReducer';
import {
  ADD_NOMINEE,
  ADD_NOMINEES_FROM_LS,
  REMOVE_NOMINEE,
  GET_RESULTS,
  SEARCH_ERROR,
  FINISHED_NOMINATING,
} from './types';

export const AppState = (props) => {
  const initialState = {
    nominees: [],
    results: [],
    searchError: false,
    finishedNominating: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Make a request to the API to get a list of movies
  const getResults = async (searchText) => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      // Show at most 5 results
      const results = res.data.Search.slice(0, 5);
      dispatch({ type: GET_RESULTS, payload: results });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };

  // Used for adding nominee from the search results list
  const addNominee = (nominee) => {
    if (state.nominees.length < 5) {
      // If this is the last nominee, set the banner indicating that the user is finished
      if (state.nominees.length === 4) {
        dispatch({ type: FINISHED_NOMINATING });
      }
      // State doesn't immediately update after dispatch call,
      // so create an array manually to write to local storage
      const localStorageArray = [...state.nominees, nominee];
      localStorage.setItem('nominees', JSON.stringify(localStorageArray));
      dispatch({ type: ADD_NOMINEE, payload: nominee });
    }
  };

  const addNomineesFromLS = (nominees) => {
    dispatch({ type: ADD_NOMINEES_FROM_LS, payload: nominees });
  };

  const removeNominee = (nominee) => {
    // State doesn't immediately update after dispatch call,
    // so create an array manually to write to local storage
    const localStorageArray = state.nominees.filter(
      (otherNominee) => nominee.imdbID !== otherNominee.imdbID
    );
    localStorage.setItem('nominees', JSON.stringify(localStorageArray));
    dispatch({ type: REMOVE_NOMINEE, payload: nominee.imdbID });
  };

  return (
    <AppContext.Provider
      value={{
        results: state.results,
        nominees: state.nominees,
        searchError: state.searchError,
        finishedNominating: state.finishedNominating,
        addNominee,
        addNomineesFromLS,
        removeNominee,
        getResults,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
