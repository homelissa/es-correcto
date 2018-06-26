import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { register, login } from './util/session_api_utils';
import { configureStore } from './store/store';

// import { Router, browserHistory } from 'react-router';
// import reduxThunk from 'redux-thunk';
// import store


document.addEventListener("DOMContentLoaded", () => {

  window.register = register;
  window.login = login;


  const root = document.getElementById('root');
  ReactDOM.render(<h1>hello</h1>, root);
});
