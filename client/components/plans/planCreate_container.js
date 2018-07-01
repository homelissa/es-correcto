import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreatePlanForm from './planCreate_form';
import { createPlan } from '../../actions/plan_action';
import cookie from 'react-cookies';

const msp = (state, ownProps) => {
  const formType = 'Create Plan';
  let product = state.products[ownProps.match.params.productId];
  console.log("product",product);
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }

  return {
    formType: formType,
    product: product,
    userId: currentUser._id
  };
};

const mdp = dispatch => ({
  action: plan => dispatch(createPlan(plan))
});

export default connect(msp, mdp)(CreatePlanForm);
