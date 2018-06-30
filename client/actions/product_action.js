import * as ProductAPIUtil from '../util/product_util.js';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_USER_PRODUCTS = 'RECEIVE_USER_PRODUCTS';
export const RECEIVE_ONE_PRODUCT = 'RECEIVE_ONE_PRODUCT';

export const requestOneProduct = (name) => dispatch => {
  return ProductAPIUtil.fetchOneProduct(name)
    .then(response => dispatch({type: RECEIVE_ONE_PRODUCT,payload: response}));
};

export const requestAllProducts = () => dispatch => {
  return ProductAPIUtil.fetchAllProducts()
    .then(response => dispatch({type: RECEIVE_ALL_PRODUCTS,payload: response}));
};


export const createProduct = (input_product) => dispatch => {
  return ProductAPIUtil.createProduct()
    .then(response => dispatch({type: RECEIVE_ONE_PRODUCT,payload: response}));
};

export const requestUserProducts = () => dispatch => {
  return ProductAPIUtil.fetchUserProducts()
    .then(response => dispatch({type: RECIEVE_USER_PRODUCTS, payload: response}));
};