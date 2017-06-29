import * as APIUtil from '../util/like_util';
import { receiveSinglePost } from './post_actions';

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
