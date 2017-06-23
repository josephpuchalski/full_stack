import { RECEIVE_USER } from '../actions/user_actions';
import {merge} from 'lodash';

const defaultState = Object.freeze({});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, user);
    default:
    return state;
  }
};



export default UserReducer;
