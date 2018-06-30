import { RECEIVE_USER_PRODUCTS, RECEIVE_USER_PRODUCT } from '../actions/product_action';
import merge from 'lodash/merge';

const userProductReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PRODUCT:
      let newState = merge({}, state);
      let userProduct = JSON.parse(action.payload);
      newState[userProduct._id] = userProduct;
      return newState;
    case RECEIVE_USER_PRODUCTS:
      let userProducts = JSON.parse(action.payload);
      newState = merge({}, state);
      userProducts.forEach(userProduct => {
        newState[userProduct._id] = userProduct;
      });
      return newState;
    default:
      return state;
  }
};

export default userProductReducer;
