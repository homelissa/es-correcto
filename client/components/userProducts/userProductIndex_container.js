import React from 'react';
import { connect } from 'react-redux';
import UserProductIndex from './userProductIndex';
import { withRouter } from 'react-router-dom';
import { requestUserProducts,requestAllProducts } from '../../actions/product_action';
import { requestAllPlans, removePlan } from '../../actions/plan_action';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  let plans = Object.values(state.plans);
  console.log("state",state);
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }

  console.log("currentUser",currentUser);
  let userPlans = [];
  if (plans){
    userPlans = plans.filter(plan => plan.userId === currentUser._id);
  }
  console.log("plans",plans);
  console.log("userPlans",userPlans);

  return {
    products: Object.values(state.products),
    currentUser: currentUser,
    userPlans: userPlans,
    type: "userProductIndex"
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProducts: () => dispatch(requestAllProducts()),
    requestAllPlans: () => dispatch(requestAllPlans()),
    removePlan: id => dispatch(removePlan(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProductIndex));
