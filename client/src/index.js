import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { register, login } from '../util/session_api_utils';
import configureStore from '../store/store';
import rootReducer from '../reducers/root_reducer';
import userReducer from '../reducers//user_reducer';
import { RECEIVE_CURRENT_USER,AUTH_USER,UNAUTH_USER,receiveCurrentUser,login,register} from '../actions/session_action';

document.addEventListener("DOMContentLoaded", () => {

  // window.register = register;
  // window.login = login;
  window.login = login;
  window.register = register;
  window.configureStore = configureStore;
  window.rootReducer = rootReducer;
  console.log(configureStore);

  const root = document.getElementById('root');
  console.log(root);
  ReactDOM.render(<h1>Welcome to Es Correcto</h1>, root);
});
