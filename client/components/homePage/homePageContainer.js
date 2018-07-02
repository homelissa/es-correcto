import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './homePage';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import { logout } from '../../actions/session_action';


const mapStateToProps = state => {
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }
  return {
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
