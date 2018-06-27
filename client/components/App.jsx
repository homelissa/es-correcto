import React from 'react';
import { Provider } from 'react-redux';
import LoginFormContainer from './session/loginform_container';
import SignupFormContainer from './session/registerform_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import cookie from 'react-cookies';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

function App(){


  <Switch>
  <AuthRoute path="/login" LoginFormContainer/>
  <AuthRoute path="signup" SignupFormContainer/>
  </Switch>
  
}
