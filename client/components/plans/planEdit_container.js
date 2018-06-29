import React from 'react';
import { connect } from 'react-redux';
import PlanForm from './plan_form';
import { requestOnePlan, updatePlan } from '../../actions/plan_actions';

class EditPlanForm extends React.Component {
  componentDidMount() {
    this.props.requestOnePlan(this.props.match.params.planId);
  }

  render() {
    return (
      <PlanForm
        action={this.props.action}
        formType={this.props.formType}
        plan={this.props.plan} />
    );
  }
}

const msp = (state, ownProps) => {
  const defaultPlan = { cost: '', paymentFrequency: '', contractLength: '', enrollmentDate: '' };
  const plan = state.plans[ownProps.match.params.planId] || defaultPlan;
  const formType = 'Update Plan';

  return { plan, formType };
};

const mdp = dispatch => ({
  requestOnePlan: id => dispatch(requestOnePlan(id)),
  action: plan => dispatch(updatePlan(plan))
});

export default connect(msp, mdp)(EditPlanForm);