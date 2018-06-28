import React from 'react';
import { connect } from 'react-redux';
import ProductIndex from './productIndex';
import { withRouter } from 'react-router-dom';
import {fetchOneProduct,
  fetchAllProducts,
  createProduct} from '../../actions/product_action';

const mapStateToProps = state => {
  return {
    products: state.products
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
