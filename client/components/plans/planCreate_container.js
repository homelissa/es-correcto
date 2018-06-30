import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreatePlanForm from './planCreate_form';
import { createPlan } from '../../actions/plan_action';

const msp = (state, ownProps) => {
  const formType = 'Create Plan';

  return { formType };
};

const mdp = dispatch => ({
  action: plan => dispatch(createPlan(plan))
});

export default connect(msp, mdp)(CreatePlanForm);