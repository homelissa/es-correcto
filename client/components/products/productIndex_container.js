import React from 'react';
import { connect } from 'react-redux';
import ProductIndex from './productIndex';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import {requestOneProduct,
  requestAllProducts,
  createProduct} from '../../actions/product_action';

const mapStateToProps = state => {
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }
  return {
    products: Object.values(state.products),
    currentUserId: currentUser._id,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(requestAllProducts())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
