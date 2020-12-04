import React from 'react';
import { Route } from 'react-router-dom';

/*
  1. it has the same interface a Route
  2. it renders a <Route /> and pass props to it
  3. it checks if the user has an authentication 
     token and if they do, it renderd the passed in component
  4. if the user dos not have an authentication token, it redirects to /login
*/
const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} />
}

export default PrivateRoute;