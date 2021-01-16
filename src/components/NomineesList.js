import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import { Nominees } from './Nominees';

/**
 * This component is used to retrieve nominees and addNomineesFromLS
 * from AppState. The Nominees component uses life-cycle methods, so
 * it needs to be a class component; hence, it can't use the
 * useContext hook()
 */
export const NomineesList = () => {
  const appContext = useContext(AppContext);
  const { nominees, addNomineesFromLS } = appContext;

  return <Nominees nominees={nominees} addNomineesFromLS={addNomineesFromLS} />;
};
