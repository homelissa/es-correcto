import { RECEIVE_ONE_PLAN, RECEIVE_ALL_PLANS, REMOVE_PLAN } from '../actions/plan_action';
import merge from 'lodash/merge';

const planReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_PLAN:
      let newState = merge({}, state);
      let plan = JSON.parse(action.payload);
      newState[plan._id] = plan;
      return newState;
    case RECEIVE_ALL_PLANS:
      let plans = JSON.parse(action.payload);
      let hash_plans = {};
      plans.forEach((plan) => {
        hash_plans[plan._id] = plan;
      });
      return hash_plans;
    case REMOVE_PLAN:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default planReducer;
