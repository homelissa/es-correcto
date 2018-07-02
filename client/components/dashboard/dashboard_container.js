import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import { logout } from '../../actions/session_action';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.authenticated,
    token: state.user.profile.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loadUserFromToken: () => {
    //   return cookie.load('token'),
    // },
    logout: () => dispatch(logout())
  };
};

// added withRouter here because app.js was blocking rerenders without it
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
