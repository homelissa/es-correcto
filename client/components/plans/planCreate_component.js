import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlanForm from './plan_form';
import { createPlan } from '../../actions/plan_action';

const msp = state => {
  const plan = { cost: '', paymentFrequency: '', contractLength: '', enrollmentDate: '' };
  const formType = 'Create Plan';

  return { plan, formType };
};

const mdp = dispatch => ({
  action: plan => dispatch(createPlan(plan))
});

export default connect(msp, mdp)(PlanForm);