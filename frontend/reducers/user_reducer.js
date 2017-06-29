import { RECEIVE_USER } from '../actions/user_actions';
import {merge} from 'lodash';
import { RECEIVE_SINGLE_POST, REMOVE_SINGLE_POST, RECEIVE_UPLOAD_POST } from '../actions/post_actions';
import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/follow_actions';
import { LIKE_POST, UNLIKE_POST } from '../actions/like_actions';
const defaultState = Object.freeze({});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let updatedState;
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return user;
    case RECEIVE_UPLOAD_POST:
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
    case RECEIVE_SINGLE_POST:
      updatedState = merge({}, state, {posts: state.posts.map(
        (post) => {
          // debugger;
          if (post.id === action.post.id) {
            return action.post;
          } else
            return post;
        }
      )});
      // if (updatedState.likes.likesIds.includes(action.post.id)) {
      //   let idx = updatedState.likes.likesIds.indexOf(action.post.id);
      //   delete updatedState.likes.likesIds[idx];
      // }
      return updatedState;
    default:
    return state;
  }
};

// case FOLLOW_USER:
//   updatedState = merge({}, state, {[action.follow.id]: action.follow} );
//   return updatedState;
// case UNFOLLOW_USER:
//   updatedState = merge({}, state);
//   delete updatedState[action.follow.id];
//   return updatedState;

//   return updatedState.followers.push({follower_id: action.follower_id});

export default UserReducer;
