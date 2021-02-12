import React from 'react';
import { Route } from 'react-router-dom';

/* 1. same interface (API) as Route
   2. render a <Route /> passing all the properties it was passed to it
   3. check to see if the user has an auth token, if not, redirect back to login
   4. if have a token, 2. will render GasPrices retrieve data
*/

const PrivateRoute = props => {
  return <Route {...props} />
}

export default PrivateRoute;