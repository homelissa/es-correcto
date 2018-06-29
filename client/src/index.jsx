import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import Root from '../components/root';
import cookie from 'react-cookies';

// import { register, login } from '../util/session_api_utils';
// import { fetchOneProduct,fetchAllProducts,createProduct } from '../util/product_util';
import { requestOnePlan,requestAllPlans,createPlan, updatePlan, removePlan } from '../actions/plan_action';
import rootReducer from '../reducers/root_reducer';
import userReducer from '../reducers//user_reducer';
import productReducer from '../reducers//product_reducer';
import { RECEIVE_CURRENT_USER,AUTH_USER,UNAUTH_USER,receiveCurrentUser,login,register,logout} from '../actions/session_action';
import { RECEIVE_ONE_PRODUCT,RECEIVE_ALL_PRODUCTS,fetchOneProduct,requestAllProducts,createProduct} from '../actions/product_action';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let token = cookie.load('token');
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    let currentUser = JSON.parse(window.atob(userInfo));
    console.log(currentUser);

    const preloadedState = {
      auth:  { authenticated: true },
      user: { profile: { token: token, user: currentUser } }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }


  // window.fetchOneProduct = fetchOneProduct;
  // window.fetchAllProducts = fetchAllProducts;
  // window.requestOneProduct = requestOneProduct;
  window.requestAllProducts = requestAllProducts;
  window.createProduct = createProduct;

  window.requestOnePlan = requestOnePlan;
  window.requestAllPlans = requestAllPlans;
  window.createPlan = createPlan;
  window.removePlan = removePlan;
  window.updatePlan = updatePlan;
  window.fetchOneProduct = fetchOneProduct;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.receiveCurrentUser = receiveCurrentUser;
  window.login = login;
  window.register = register;
  window.logout = logout;
  window.rootReducer = rootReducer;
  console.log(configureStore);


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
