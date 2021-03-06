import { RECEIVE_CURRENT_USER, UNAUTH_USER } from '../actions/session_action';
import merge from 'lodash/merge';

const userReducer = (state={ profile: {}, error: '' },action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {...state, profile: JSON.parse(action.currentUser) }
      // return merge({},state,{user: action.currentUser});
    case UNAUTH_USER:
      return {...state, profile: {} }
    default:
      return state;
  }
};

export default userReducer;
