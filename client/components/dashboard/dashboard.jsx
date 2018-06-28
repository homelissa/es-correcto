import React from 'react';
// import { Provider } from 'react-redux';
// import LoginFormContainer from '../session/loginform_container';
// import SignupFormContainer from '../session/registerform_container';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
// import cookie from 'react-cookies';

import {
  Redirect,
  Link,
} from 'react-router-dom';

class Dashboard extends React.Component {

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
            <Link to='/products' className="product-link"><h3>Products</h3></Link>
            <button type="button" className="logout-button" onClick={(e)=> this.props.logout()}>Logout</button>
            </div>
            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default Dashboard;
