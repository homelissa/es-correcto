import React from 'react';
import { Provider } from 'react-redux';
import LoginFormContainer from './session/loginform_container';
import SignupFormContainer from './session/registerform_container';
import DashboardContainer from './dashboard/dashboard_container';
import ProductIndexContainer from './products/productIndex_container';
import AddProductContainer from './products/addProduct_container';
import UserProductIndexContainer from './userProducts/userProductIndex_container';
import UserReportContainer from './userProducts/user_report_container';
import CreatePlanContainer from "./plans/planCreate_container";
import EditPlanFormContainer from "./plans/planEdit_container";
import homePageContainer from './homePage/homePageContainer';
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

      <ProtectedRoute path="/" component={DashboardContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <Switch>
        <ProtectedRoute exact path="/products" component={ProductIndexContainer}/>
        <ProtectedRoute exact path="/userproducts" component={UserProductIndexContainer}/>
        <ProtectedRoute exact path="/addproducts" component={AddProductContainer}/>
        <ProtectedRoute exact path="/userproducts/:productId/plans/new" component={CreatePlanContainer} />
        <ProtectedRoute exact path="/userproducts/:productId/plans/:planId" component={EditPlanFormContainer} />
        <ProtectedRoute exact path ="/userreports" component = {UserReportContainer}/>
        <ProtectedRoute exact path ="/" component = {homePageContainer}/>
      </Switch>

    </div>

  );
};

export default App;
