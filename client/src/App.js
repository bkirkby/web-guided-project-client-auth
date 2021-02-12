import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import GasPrices from './components/GasPrices';

import { axiosWithAuth } from './utils/axiosWithAuth';

import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
      .catch(err => console.error("unable to logout"));
    localStorage.removeItem('token');
  };


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {localStorage.getItem('token') &&
            <>
              <li>
                <Link to="/login" onClick={logout}>Logout</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </>
          }
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={GasPrices} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
