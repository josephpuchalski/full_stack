export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
import * as APIUtil from '../util/like_util';
import { receiveSinglePost } from './post_actions';


export const addComment = (comment) => {
  return ({
    type: ADD_COMMENT,
    comment,
  });
};

export const removeComment = (comment) => {
  returnm ({
    type: REMOVE_COMMENT,
    comment,
  });
};




export const comment = comment => dispatch => (
  APIUtil.addComment(id).then(
    post => {
      return dispatch(receiveSinglePost(post));
    }
  )
);

export const uncomment = id => dispatch => (
  APIUtil.removeComment(id).then(
    post => {
      return dispatch(receiveSinglePost(post));
    }
  )
);
