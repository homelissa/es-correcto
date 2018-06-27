import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_action';
import SessionForm from './session_form';



const mapStateToProps = (state) => ({
	currentUser: state.user.profile.user,
  errors: state.auth.errors,
  formType: 'Login',
  navLink: <Link to='/Signup'>Sign Up</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  login: user => dispatch(login(user))
  // clearForm: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
