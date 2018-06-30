import React from 'react';
import { connect } from 'react-redux';
import ProductIndex from './productIndex';
import { withRouter } from 'react-router-dom';
import { requestUserProducts } from '../../actions/product_action';

const mapStateToProps = state => {
  return {
    products: Object.values(state.products)
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProducts: () => dispatch(requestUserProducts())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
