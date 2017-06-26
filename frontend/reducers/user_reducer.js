import { RECEIVE_USER } from '../actions/user_actions';
import {merge} from 'lodash';
import { RECEIVE_SINGLE_POST } from '../actions/post_actions';
const defaultState = Object.freeze({});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, user);
    case RECEIVE_SINGLE_POST:
      const newState = merge({}, state);
      let toPush = true;
      newState.posts.forEach(post => {
        if (post.id === action.post.id) {
          toPush = false;
        }
      });
      if (toPush) {
        newState.posts.push(action.post);
      }
      return newState;
    default:
    return state;
  }
};



export default UserReducer;
