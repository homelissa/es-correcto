import React from 'react';
import { connect } from 'react-redux';
import EditPlanForm from './planEdit_form';
import { requestOnePlan, updatePlan, requestAllPlans } from '../../actions/plan_action';

const msp = (state, ownProps) => {
  const formType = 'Update Plan'
  const plan = state.plans[ownProps.match.params.planId]

  return { formType, plan };
};

const mdp = dispatch => ({
  requestOnePlan: id => dispatch(requestOnePlan(id)),
  requestAllPlans: () => dispatch(requestAllPlans()),
  action: plan => dispatch(updatePlan(plan))
});

export default connect(msp, mdp)(EditPlanForm);