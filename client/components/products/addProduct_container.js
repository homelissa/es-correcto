import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddProductForm from './addproduct';
import { createPlan } from '../../actions/plan_action';
import cookie from 'react-cookies';
import { createUserProduct } from '../../actions/product_action';

const msp = (state, ownProps) => {
  const formType = 'Add your own custom subscription';
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }
  return {
    formType: formType,
    userId: currentUser._id,
    userProduct: state.userproducts
  };
};

const mdp = dispatch => ({
  action: product => dispatch(createUserProduct(product))
});

export default connect(msp, mdp)(AddProductForm);
