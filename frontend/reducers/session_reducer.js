import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import {merge} from 'lodash';

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
    default:
      return state;
  }
};

export default SessionReducer;
