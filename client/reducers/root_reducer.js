import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import productReducer from './product_reducer';

const rootReducer = combineReducers({

  auth: authReducer,
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
