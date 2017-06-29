export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';
import * as APIUtil from '../util/like_util';
import { receiveSinglePost } from './post_actions';


export const likePost = (post) => {
  return ({
    type: LIKE_POST,
    post,
  });
};

export const unlikePost = (post) => {
  returnm ({
    type: UNLIKE_POST,
    post,
  });
};




export const like = id => dispatch => (
  APIUtil.likePost(id).then(
    post => {
      return dispatch(receiveSinglePost(post));
    }
  )
);

export const unlike = id => dispatch => (
  APIUtil.unlikePost(id).then(
    post => {
      return dispatch(receiveSinglePost(post));
    }
  )
);
