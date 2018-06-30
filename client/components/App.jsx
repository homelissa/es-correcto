import React from 'react';
import { Provider } from 'react-redux';
import LoginFormContainer from './session/loginform_container';
import SignupFormContainer from './session/registerform_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProductIndexContainer from './products/productIndex_container';
import UserProductIndexContainer from './products/user_productIndex_container';
import PlanForm from "./plans/plan_form";

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
      <DashboardContainer />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <Switch>
        <ProtectedRoute exact path="/products" component={ProductIndexContainer}/>
        <ProtectedRoute path="/add-plan/:productId" component={PlanForm}/>
        <ProtectedRoute exact path="/" component={UserProductIndexContainer}/>
      </Switch>

    </div>

  );
};

export default App;
// <ProtectedRoute exact path='/' component={DashboardContainer} />
