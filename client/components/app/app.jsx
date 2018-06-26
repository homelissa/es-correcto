import React from 'react';
import { Provider } from 'react-redux';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class App extends React.Component {
  componentWillMount() {
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

        </header>



        <Switch>
        </Switch>
      </div>
    );
  }
}

export default App;