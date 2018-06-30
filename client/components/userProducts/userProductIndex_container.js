import React from 'react';
import { connect } from 'react-redux';
import ProductIndex from './productIndex';
import { withRouter } from 'react-router-dom';
import { requestUserProducts } from '../../actions/product_action';
import { requestAllPlans } from '../../actions/plan_action';

const mapStateToProps = state => {
  let plans = Object.values(state.plans);
  let currentUser = state.user.profile.user;
  let userPlans = [];
  if (plans){
    userPlans = plans.filter(plan => plan.userId === currentUser._id);
  }

  return {
    products: Object.values(state.products),
    currentUser: currentUser,
    userPlans: userPlans
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProducts: () => dispatch(requestUserProducts()),
    requestAllPlans: () => dispatch(requestAllPlans())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
