import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, RECEIVE_CURRENT_USER } from '../actions/session_action';

const INITIAL_STATE = { error: '', user: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }

  return state;
}
