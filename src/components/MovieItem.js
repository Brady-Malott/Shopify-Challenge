import React, { useContext } from 'react';
import AppContext from '../context/appContext';

export const MovieItem = (props) => {
  const appContext = useContext(AppContext);
  const { nominees } = appContext;

  const { movie, addNominee } = props;

  let alreadyNominated = false;
  for (let i = 0; i < nominees.length; i++) {
    if (nominees[i].imdbID === movie.imdbID) {
      alreadyNominated = true;
    }
  }

  return (
    <div className='movie-item'>
      <h4 className='movie-title'>
        {movie.Title}
        <p className='inline-movie-release-date'> - ({movie.Year})</p>
      </h4>
      <div className='movie-item-right'>
        <p className='movie-release-date'>{movie.Year}</p>
        {alreadyNominated ? (
          <button className='btn nominate-btn-disabled'>Nominated</button>
        ) : (
          <button
            className='btn nominate-btn'
            onClick={() => addNominee(movie)}
          >
            Nominate
          </button>
        )}
      </div>
    </div>
  );
};
