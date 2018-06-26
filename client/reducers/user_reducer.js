import { RECEIVE_CURRENT_USER} from '../actions/session_action';
import merge from 'lodash/merge';

const userReducer = (state={},action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({},state,{user: action.currentUser});
    default:
      return state;
  }
};

export default userReducer;
