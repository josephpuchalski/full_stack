import { merge } from 'lodash';
import { RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, REMOVE_SINGLE_POST } from '../actions/post_actions';

const postReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.posts);
    case RECEIVE_SINGLE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case REMOVE_SINGLE_POST:
      const currentState = Object.assign({}, state);
      delete currentState[action.post.id];
      return currentState;
    default:
      return state;
  }
};

export default postReducer;
