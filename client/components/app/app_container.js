import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './app';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.authenticated,
    token: state.user.profile.token
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mdp");
  return {
    loadUserFromToken: () => {
      return cookie.load('token');
      // let token = state.user.profile.token; //sessionStorage.getItem('jwtToken');
      // if (!token || token === '') {//if there is no token, dont bother
      //   return;
      // }
      // dispatch(meFromToken(token));
    },
  };
};

// added withRouter here because app.js was blocking rerenders without it
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
