import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, register } from '../../actions/session_action';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  currentUser: state.user.profile.user,
  errors: state.auth.errors,
  formType: 'Signup',
  navLink: <Link to='/Login'>Log In</Link>
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  processForm: user => dispatch(register(user)),
  // clearForm: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
