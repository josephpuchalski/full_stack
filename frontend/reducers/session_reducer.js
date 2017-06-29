import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import {merge} from 'lodash';
import { RECEIVE_SINGLE_POST } from '../actions/post_actions';
import { UNLIKE_POST } from '../actions/like_actions';
const defaultState = Object.freeze({ currentUser: null, errors: []});

const SessionReducer = ( state = defaultState, action) => {
  Object.freeze(state);
  let errors;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, defaultState, {currentUser});
    case RECEIVE_ERRORS:
      errors = action.errors;
      return merge({}, defaultState, {errors});
    case CLEAR_ERRORS:
      errors = [];
      return merge({}, defaultState);
    case RECEIVE_SINGLE_POST:
    let updatedState = merge({}, state);
    return updatedState;
    default:
      return state;
  }
};

// if (updatedState.likes.likesIds.includes(action.post.id)) {
//   let idx = updatedState.likes.likesIds.indexOf(action.post.id);
//   delete updatedState.likes.likesIds[idx];
// }

export default SessionReducer;
