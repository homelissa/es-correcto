import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreatePlanForm from './planCreate_form';
import { createPlan } from '../../actions/plan_action';

const msp = (state, ownProps) => {
  const formType = 'Create Plan';
  let product = state.products[ownProps.match.params.productId];
  console.log("product",product);

  return {
    formType: formType,
    product: product,
    userId: state.user.profile.user._id
  };
};

const mdp = dispatch => ({
  action: plan => dispatch(createPlan(plan))
});

export default connect(msp, mdp)(CreatePlanForm);
