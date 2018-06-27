import React from 'react';
import { Provider } from 'react-redux';
import LoginFormContainer from './session/loginform_container';
import SignupFormContainer from './session/registerform_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import cookie from 'react-cookies';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => {
  return (
    <div>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>

        <ProtectedRoute exact path='/' component={DashboardContainer} />
      <Switch>

      </Switch>

    </div>

  );

  
};

export default App;