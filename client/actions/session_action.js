import * as APIUtil from '../util/session_api_utils';
import cookie from 'react-cookies';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const CLEARERRORS = 'CLEARERRORS';
export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';

export const AUTH_ERROR = 'auth_error';
export const CLIENT_ROOT_URL = 'http://localhost:8080';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});





export const login = user => dispatch => {
  return APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
  .then((response)=>{
    cookie.save('token', response.responseText.token, { path: '/'});
    cookie.save('user', response.responseText.user, { path: '/'});
    dispatch({type: AUTH_USER });
    window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
  })
  .catch((error) => {
    APIUtil.errorHandler(dispatch,error.response,AUTH_ERROR);
  });
};

// export const logout = () => dispatch => (
//   APIUtil.logout().then(user => (
//     dispatch(logoutCurrentUser())
//   ))
// );

export const register = user => dispatch => {
  return APIUtil.register(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
  .then((response)=>{
    cookie.save('token', response.responseText.token, { path: '/'});
    cookie.save('user', response.responseText.user, { path: '/'});
    dispatch({type: AUTH_USER });
    window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
  })
  .catch((error) => {
    APIUtil.errorHandler(dispatch,error.response,AUTH_ERROR);
  });
};

// export const clearErrors = () => {
//   return {
//     type: CLEARERRORS
//   };
// };
