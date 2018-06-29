import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import productReducer from './product_reducer';
import planReducer from './plan_reducer';

const rootReducer = combineReducers({

  auth: authReducer,
  user: userReducer,
  products: productReducer,
  plans: planReducer
});

export default rootReducer;
