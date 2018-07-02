import * as PlanAPIUtil from '../util/plan_util.js';
export const RECEIVE_ALL_PLANS = 'RECEIVE_ALL_PLANS';
export const RECEIVE_ONE_PLAN = 'RECEIVE_ONE_PLAN';
export const REMOVE_PLAN = 'REMOVE_PLAN';

export const requestOnePlan = (id) => dispatch => {
  return PlanAPIUtil.fetchOnePlan(id)
    .then(response => dispatch({ type: RECEIVE_ONE_PLAN, payload: response }));
};

export const requestAllPlans = () => dispatch => {
  return PlanAPIUtil.fetchAllPlans()
    .then(response => dispatch({ type: RECEIVE_ALL_PLANS, payload: response }));
};

export const createPlan = (plan) => dispatch => {
  return PlanAPIUtil.createPlan(plan)
    .then(response => dispatch({ type: RECEIVE_ONE_PLAN, payload: response }));
};

export const updatePlan = (plan) => dispatch => {
  return PlanAPIUtil.updatePlan(plan)
    .then(response => dispatch({ type: RECEIVE_ONE_PLAN, payload: response }));
};

export const removePlan = id => dispatch => {
  PlanAPIUtil.deletePlan(id);
  dispatch({type: REMOVE_PLAN, id: id});
};
