import React, { Fragment, useContext } from 'react';
import { MovieItem } from '../components/MovieItem';
import AppContext from '../context/appContext';

export const Results = () => {
  const appContext = useContext(AppContext);
  const { results, addNominee } = appContext;

  return (
    <Fragment>
      {results.length > 0 && (
        <div className='panel' id='results-panel'>
          {results.map((movie, index) => (
            <MovieItem movie={movie} addNominee={addNominee} key={index} />
          ))}
        </div>
      )}
    </Fragment>
  );
};
