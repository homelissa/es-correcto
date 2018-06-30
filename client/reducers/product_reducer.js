import { RECEIVE_ONE_PRODUCT, RECEIVE_ALL_PRODUCTS, RECEIVE_USER_PRODUCTS } from '../actions/product_action';
import merge from 'lodash/merge';

const productReducer = (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_PRODUCT:
      let newState = merge({},state);
      let product = JSON.parse(action.payload);
      newState[product._id] = product;
      return newState;
    case RECEIVE_ALL_PRODUCTS:
      let products = JSON.parse(action.payload);
      let hash_products = {};
      products.forEach((product) => {
        hash_products[product._id] = product;
      });
      return hash_products;
    default:
      return state;
  }
};

export default productReducer;
