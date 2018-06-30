import { RECEIVE_USER_PRODUCTS } from '../actions/product_action';
import merge from 'lodash/merge';

const productReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PRODUCTS:
      let userProducts = JSON.parse(action.payload);
      let newState = merge({}, state);
      userProducts.forEach(userProduct => {
        newState[userProduct._id] = userProduct;
      });
      return newState;
    default:
      return state;
  }
};

export default productReducer;
