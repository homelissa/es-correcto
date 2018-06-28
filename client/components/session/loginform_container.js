import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
	currentUser: state.user.profile.user,
  errors: [state.auth.error],
  formType: 'Login',
  navLink: <Link to='/signup'>Sign Up</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearForm: () => dispatch(clearErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
