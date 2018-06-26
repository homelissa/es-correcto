import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { register, login } from './util/session_api_utils';
import configureStore from './store/store';
import rootReducer from './reducers/root_reducer';
// import { Router, browserHistory } from 'react-router';
// import reduxThunk from 'redux-thunk';
// import store


document.addEventListener("DOMContentLoaded", () => {

  window.register = register;
  window.login = login;
  window.configureStore = configureStore;
  window.rootReducer = rootReducer;
  console.log(configureStore);

  const root = document.getElementById('root');
  ReactDOM.render(<h1>hello there</h1>, root);
});
