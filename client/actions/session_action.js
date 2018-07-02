import * as APIUtil from '../util/session_api_utils';
import cookie from 'react-cookies';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEARERRORS = 'CLEARERRORS';
export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';

export const AUTH_ERROR = 'auth_error';
export const CLIENT_ROOT_URL = 'http://localhost:8080';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const clearErrors = errors => ({
  type: CLEARERRORS,
  errors
});

export const login = user => dispatch => {
  return APIUtil.login(user).then(user => {
    let data = JSON.parse(user);
    cookie.save('token', data.token, { path: '/'});

    cookie.save('user', data.user, { path: '/'});
    dispatch({type: AUTH_USER });
    // window.location.href = CLIENT_ROOT_URL + "/";

    dispatch(receiveCurrentUser(user));
  },(error) => {
      APIUtil.errorHandler(dispatch,error,AUTH_ERROR);
    });
};

// export const logout = () => dispatch => (
//   APIUtil.logout().then(user => (
//     dispatch(logoutCurrentUser())
//   ))
// );

export const logout = () => dispatch => {

    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    // window.location.href = '/#/login';

};

export const register = user => dispatch => {
  return APIUtil.register(user).then(user => {
    let data = JSON.parse(user);
    cookie.save('token', data.token, { path: '/'});

    cookie.save('user', data.user, { path: '/'});
    dispatch({type: AUTH_USER });
    // window.location.href = CLIENT_ROOT_URL + "/";

    dispatch(receiveCurrentUser(user));
  },(error) => {
      APIUtil.errorHandler(dispatch,error,AUTH_ERROR);
    });
};
// export const clearErrors = () => {
//   return {
//     type: CLEARERRORS
//   };
// };
