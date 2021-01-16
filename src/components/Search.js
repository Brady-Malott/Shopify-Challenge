import React, { useState, useContext } from 'react';
import AppContext from '../context/appContext';

export const Search = () => {
  const appContext = useContext(AppContext);
  const { getResults } = appContext;

  const [searchText, setSearchText] = useState('');

  const onChange = (e) => {
    setSearchText(e.target.value);
    // Wasn't updating very well to make an API call every time
    // the search text changed
    // getResults(searchText);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getResults(searchText);
  };

  return (
    <div className='panel mb-20' id='search-panel'>
      <h4 className='mb-10'>Search for Movies</h4>
      <div className='input-border'>
        <i
          className='fas fa-search'
          id='search-icon'
          onClick={() => getResults(searchText)}
        />
        <form onSubmit={onSubmit} id='search-form'>
          <input
            id='search-bar'
            type='text'
            name='search'
            placeholder='Search for movies...'
            value={searchText}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};
