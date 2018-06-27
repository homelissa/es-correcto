import React from 'react';
import { Provider } from 'react-redux';
import LoginFormContainer from '../session/loginform_container';
import SignupFormContainer from '../session/registerform_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import cookie from 'react-cookies';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class App extends React.Component {

  componentWillMount() {
    let token = cookie.load('token');
     let actualToken = token.split('.')[1];
     console.log(actualToken);
     let userInfo = actualToken.replace('-', '+').replace('_', '/');
     console.log(userInfo);
     let currentUser= JSON.parse(window.atob(userInfo));
      console.log(currentUser);
    this.props.token = this.props.loadUserFromToken();
  }

  render() {
    return (
      <div>
        <header>
          <div className="home-container">
            <img className="icon" src="https://res.cloudinary.com/archhere/image/upload/v1530035048/Mobile_App_Subscription_Icon.png" />
            <Link to='/' className="header-link"><h1>Es-Correcto <span>One place to manage your subscriptions</span></h1></Link>
          </div>
          <LoginFormContainer/>
          <SignupFormContainer/>
        </header>



        <Switch>
        </Switch>
      </div>
    );
  }
}

export default App;
