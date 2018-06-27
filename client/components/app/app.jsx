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

  // constructor(props){
  //   super(props);
  //
  // }

  componentWillMount() {
    let token = cookie.load('token');
    if (token){
      let actualToken = token.split('.')[1];
      console.log(actualToken);
      let userInfo = actualToken.replace('-', '+').replace('_', '/');
      console.log(userInfo);
      let currentUser= JSON.parse(window.atob(userInfo));
      console.log(currentUser);
      this.props.token = this.props.loadUserFromToken();
    }
  }

  handleclick(){

  }

  render() {
    return (
      <div>
        <header>
          <div className="home-container">

            <h4 className="tag-line">Es-Correcto <span>One place to manage your subscriptions</span></h4>
            <div className="all-links">
            <Link to='/' className="header-link">
            <img className="icon" src="https://res.cloudinary.com/archhere/image/upload/v1530035048/Mobile_App_Subscription_Icon.png" />
            </Link>
            <div className = "right-side-links">
            <Link to='/' className="home-link"><h3>Home</h3></Link>
            <Link to='/' className="subscriptions-link"><h3>Manage Subscriptions</h3></Link>
            <Link to='/' className="product-link"><h3>Products</h3></Link>
            <button type="button" className="logout-button" onClick={(e)=> this.props.logout()}>Logout</button>
            </div>
            </div>
          </div>

          <LoginFormContainer/>
          <SignupFormContainer/>
        </header>



        <Switch>
          <AuthRoute path="/login" LoginFormContainer/>
          <AuthRoute path="signup" SignupFormContainer/>
        </Switch>
      </div>
    );
  }
}

export default App;
