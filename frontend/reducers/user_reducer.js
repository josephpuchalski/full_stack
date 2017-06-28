import { RECEIVE_USER } from '../actions/user_actions';
import {merge} from 'lodash';
import { RECEIVE_SINGLE_POST, REMOVE_SINGLE_POST } from '../actions/post_actions';
import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/follow_actions';
const defaultState = Object.freeze({});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let updatedState;
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return user;
    case RECEIVE_SINGLE_POST:
      const newState = merge({}, state);
      let toUnshift = true;
      newState.posts.forEach(post => {
        if (post.id === action.post.id) {
          toUnshift = false;
        }
      });
      if (toUnshift) {
        newState.posts.unshift(action.post);
      }
      return newState;
    case FOLLOW_USER:
      updatedState = merge({}, state, {[action.follow.id]: action.follow} );
      return updatedState;
    default:
    return state;
  }
};


//   return updatedState.followers.push({follower_id: action.follower_id});

// case UNFOLLOW_USER:
// updatedState = merge({}, state);
// return updatedState.followers.push(action.follower_id);
export default UserReducer;
