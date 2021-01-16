import React, { Fragment, useContext } from 'react';
import AppContext from '../context/appContext';

export const Banner = () => {
  const appContext = useContext(AppContext);
  const { finishedNominating } = appContext;

  return (
    <Fragment>
      {finishedNominating && (
        <div className='finished-banner mb-20'>
          <p>Thank you for your feedback!</p>
        </div>
      )}
    </Fragment>
  );
};
