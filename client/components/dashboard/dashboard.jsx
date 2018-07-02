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
            <div className="title">
              <Link to='/' className="header-link">
                <img className="icon" src="https://res.cloudinary.com/archhere/image/upload/v1530035048/Mobile_App_Subscription_Icon.png" />
              </Link>
              <Link to='/' className="tag-line"><h4>Es-Correcto </h4></Link>
            </div>

            <div className="all-links">
              <div className = "right-side-links">
                {/* <Link to='/' className="home-link">Home</Link> */}
                <Link to='/userproducts' className="subscriptions-link">Manage Subscriptions</Link>
                <Link to='/products' className="product-link">Products</Link>
                <Link to="/userreports" className="report-link" > Reports</Link>
                {/* <Link to="/login" onClick={(e) => this.props.logout()} className="logout"> Logout</Link> */}
                <button type="button" className="logout-button" onClick={(e)=> this.props.logout().then((logout) => this.props.history.push(`/login`))}>Logout</button>
              </div>
            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default Dashboard;
